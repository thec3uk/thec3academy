/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const dotenv = require('dotenv')
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
        schemas: {
          academy_page: require('./src/schemas/academy_page.json'),
          content_page: require('./src/schemas/content_page.json'),
          homepage: require('./src/schemas/homepage.json'),
          landing_page: require('./src/schemas/landing_page.json'),
          notification_banner: require('./src/schemas/notification_banner.json'),
          redirect: require('./src/schemas/redirect.json'),
          site_config: require('./src/schemas/site_config.json'),
          text_page: require('./src/schemas/text_page.json'),
          colour: require('./src/schemas/colour.json'),
          page: require('./src/schemas/page.json'),
          online_event: require('./src/schemas/online_event.json'),
          contact_information: require('./src/schemas/contact_information.json'),
        },
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
        name: `Software Crafts`,
        short_name: `Software Crafts`,
        start_url: `/`,
        background_color: `#f1ece1`,
        theme_color: `#f1ece1`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ],
}
