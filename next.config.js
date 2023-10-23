module.exports = {
  basePath: '/portfolio-project',
  images: {
    domains: ["play.google.com", "developer.apple.com"],
    deviceSizes: [320, 640, 768, 1024, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    path: "/_next/image",
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play.google.com",
        port: "",
        pathname:
          "/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
      },
      {
        protocol: "https",
        hostname: "developer.apple.com",
        port: "",
        pathname: "/assets/elements/badges/download-on-the-app-store.svg",
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  transpilePackages: ['three'],
};
