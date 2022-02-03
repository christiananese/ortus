module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["de", "en", "it"],
    defaultLocale: "de",
  },
  images: {
    domains: ["www.roterhahn.it"],
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
      {
        source: "/ueber-uns",
        destination: "/de/about-us",
      },
      {
        source: "/su-di-noi",
        destination: "/it/about-us",
      },
    ];
  },
};
