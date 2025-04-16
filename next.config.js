const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/portfolio-project' : '',
  assetPrefix: isProd ? '/portfolio-project/' : '',
  output: 'export',
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
