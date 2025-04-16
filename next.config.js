module.exports = {
  output: 'export',
  basePath: '/portfolio-project',
  assetPrefix: '/portfolio-project/',
  images: {
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
