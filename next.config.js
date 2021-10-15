module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["de", "en", "it"],
    defaultLocale: "de",
  },
  async rewrites() {
    return [
      {
        source: "/erlebnisse/:slug",
        destination: "/de/surroundings/:slug",
        locale: false,
      },
      {
        source: "/emozioni/:slug",
        destination: "/it/surroundings/:slug",
      },
    ];
  },
  images: {
    domains: ["preview.cruip.com"],
  },
};
