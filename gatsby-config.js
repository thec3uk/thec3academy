/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env`,
})
const config = require('./src/config/site')
const prismicRepositoryName = 'thec3'

const linkResolver = function (doc) {
  // Fallback for other types, in case new custom types get created
  return '/' + doc.uid
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    ...config,
  },
  plugins: [
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: ({ node, key, value }) => linkResolver,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // schemas: {
        //   academy_page: require('./src/schemas/academy_page.json'),
        //   content_page: require('./src/schemas/content_page.json'),
        //   homepage: require('./src/schemas/homepage.json'),
        //   landing_page: require('./src/schemas/landing_page.json'),
        //   notification_banner: require('./src/schemas/notification_banner.json'),
        //   redirect: require('./src/schemas/redirect.json'),
        //   site_config: require('./src/schemas/site_config.json'),
        //   text_page: require('./src/schemas/text_page.json'),
        //   colour: require('./src/schemas/colour.json'),
        //   page: require('./src/schemas/page.json'),
        //   online_event: require('./src/schemas/online_event.json'),
        //   contact_information: require('./src/schemas/contact_information.json'),
        // },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-tslint',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: 'c9ca3f93-1107-49cc-b2e4-ddb0dbae79d1',
        srcUrl: 'https://analytics.myc3.life/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
  ],
}
