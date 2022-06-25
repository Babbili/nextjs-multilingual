/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // add the i18n config
  // this is a Sub-path Routing config, it puts the locale in the url path
  i18n: {
    locales: ['en', 'fr'], // These are all the locales you want to support in your app.
    defaultLocale: 'en', // This is the default locale you want to be used when visiting a non-locale prefixed path e.g. `/contact`

    // localeDetection: false, // will no longer automatically detect which locale the user prefers based on the Accept-Language header
  },
}

module.exports = nextConfig
