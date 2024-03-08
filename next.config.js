/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "ru-RU"],
    defaultLocale: "ru-RU",
  },
  async redirects() {
    return [
      {
        source: '/uploads/:path*',
        permanent: true,
        destination: 'http://localhost:1337/uploads/:path*' // Proxy to Backend
      }
    ]
  }
};

module.exports = nextConfig;
