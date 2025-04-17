---
title: "Oauth2.0 and OpenID in .NET"
date: "04-11-2025"
author: "Seth Rhodes"
description: "This is a presentation on OAuth2.0 and OpenID integration in .NET. Specifically with ASP.NET Core Identity and the Google Oauth2.0 provider."
---

## The Problem

The ASP.NET Core Identity library is powerful, but it can be tricky to set up custom OAuth and OpenID workflows.

> Learning the OAuth2.0 standard and the basics of the Identity library will set you up to connect to *any* OAuth provider out there — whether it has a pre-built library or not.

---

## What This Covers

- A quick breakdown of OAuth2.0 and OpenID terms  
- Google OAuth2.0 + OpenID using the built-in ASP.NET Core Identity library  
- A custom OAuth2.0 workflow (using Google as an example)

---

## Time to Define Some Terms

### Authentication  
Verifying someone *is who they say they are*  
> *Think of a passport*
> ![passport](https://images.vexels.com/media/users/3/128400/isolated/lists/c9db2601b0265cecee08dbfd903ef0ab-passport-travel-icon.png "passport")

### Authorization  
Verifying someone *has access to a specific resource*
> *Think of the visa in the passport*
> ![visa](https://www.basecamphike.com/wp-content/uploads/2020/06/tourist-visa-nepal.png "visa")

### OAuth2.0
OAuth2.0 is the industry-standard protocol for authorization — letting users grant access without sharing passwords.

```text
+--------+                               +---------------+
|        |--(A)- Authorization Request ->|   Resource    |
|        |                               |     Owner     |
|        |<-(B)-- Authorization Grant ---|               |
|        |                               +---------------+
|        |
|        |--(C)-- Authorization Grant -->| Authorization |
| Client |                               |     Server    |
|        |<-(D)----- Access Token -------|               |
|        |
|        |--(E)----- Access Token ------>|    Resource   |
|        |                               |     Server    |
|        |<-(F)--- Protected Resource ---|               |
+--------+                               +---------------+
```

### Access Tokens

- Credentials used to access protected resources
- Represent authorization, scope, and lifespan
- Replace usernames and passwords with a simple, secure token
- May include cryptographic properties depending on the server

### Refresh Tokens

- Issued by the auth server
- Used to get new access tokens when old ones expire
- Never sent to resource servers
- Help keep users logged in without asking them to reauthenticate

### OpenID

OpenID is an *authentication layer* built on top of OAuth2.0.

- Gives a secure, verifiable answer to:  
  > "Who is the person currently using this browser or app?"
- Developers love it because it:
  - Removes the need to store or manage passwords
  - Reduces risk of credential-based data breaches
  - Works great across platforms (web, mobile, etc.)

---

## Identity in ASP.NET Core

⚠️ We're using Identity *in* ASP.NET Core,  
but **not ASP.NET Identity** and **not the Microsoft Identity Platform**.

---

## Google External Login with ASP.NET Core

### 1. Create the Project

```bash
dotnet new webapp -o GoogleOAuthDemo --auth Individual
```

---

### 2. Register the App with Google

1. Go to [Google Cloud Console](https://console.developers.google.com)
2. Create a new project
3. Go to **OAuth Consent Screen** → fill in app details
4. Create an **OAuth 2.0 Client ID**
    - Application type: **Web**
    - Redirect URI:  
      ```
      https://localhost:7182/signin-google
      ```

**What is `/signin-google`?**  
It’s the default callback path used by the Google OAuth middleware in ASP.NET Core.

---

### 3. Add the Google Login NuGet Package

```bash
dotnet add package Microsoft.AspNetCore.Authentication.Google
```

---

### 4. Add Google Auth in `Program.cs`

```csharp
builder.Services.AddAuthentication()
    .AddGoogle(options =>
    {
        options.ClientId = config["Authentication:Google:ClientId"];
        options.ClientSecret = config["Authentication:Google:ClientSecret"];
    });
```

---

### 5. Add Config to `appsettings.json` (or User Secrets)

```json
"Authentication": {
  "Google": {
    "ClientId": "your-client-id",
    "ClientSecret": "your-client-secret"
  }
}
```

---

### 6. Test It

Run the app and click “Login with Google.” You’re in.

---

## Custom OAuth Flow (Still Using Google for the Demo)

Let’s say your provider *doesn't* have a premade library. You can still make it work with `.AddOAuth()`.

---

### 1. Register with the Third-Party Provider

Same as before — we’ll continue using Google for this example.

---

### 2. Add a Custom OAuth Provider in `Program.cs`

```csharp
builder.Services.AddAuthentication()
    .AddOAuth("Google", options =>
    {
        options.ClientId = "...";
        options.ClientSecret = "...";
        options.CallbackPath = "/signin-google";

        options.AuthorizationEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        options.TokenEndpoint = "https://oauth2.googleapis.com/token";
        options.UserInformationEndpoint = "https://openidconnect.googleapis.com/v1/userinfo";

        options.Scope.Add("openid");
        options.Scope.Add("profile");
        options.Scope.Add("email");

        options.ClaimActions.MapJsonKey(ClaimTypes.NameIdentifier, "sub");
        options.ClaimActions.MapJsonKey(ClaimTypes.Name, "name");
        options.ClaimActions.MapJsonKey(ClaimTypes.Email, "email");

        options.Events = new OAuthEvents
        {
            OnCreatingTicket = async context =>
            {
                var idToken = context.TokenResponse.Response?.RootElement.GetString("id_token");
                var handler = new JwtSecurityTokenHandler();
                var token = handler.ReadJwtToken(idToken);

                foreach (var claim in token.Claims)
                {
                    context.Identity?.AddClaim(claim);
                }
            }
        };
    });
```

This pattern works not only for Google, but for **any** standards-compliant OAuth2/OpenID provider.

---

### 3. Test

Run the app and login. Same Google sign-in — but now **you built the OAuth flow yourself.**

---

## References

- [Intro to Identity on ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-9.0)
- [Google External Login in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/social/google-logins?view=aspnetcore-9.0)
- [Add Claims and Tokens from External Providers](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/social/additional-claims?view=aspnetcore-9.0)
- [ASP.NET Core Authentication Overview](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/)
- [OAuth2.0 Explained](https://oauth.net/2/)

---

## Final Thoughts

OAuth2.0 and OpenID might sound intimidating at first — but once you understand the flow and build a working example, you’re set for almost any modern app.

Whether you're using a prebuilt library or setting up a custom provider, this knowledge gives you the flexibility to integrate secure, standards-based login with confidence.

---