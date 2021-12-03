module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'The C3 Academy', // Navigation and Site Title
  description: 'The C3 Academy is ....',
  url: process.env.URL || 'http://localhost:8050', // Domain of your site. No trailing slash!
  siteUrl: process.env.URL || 'http://localhost:8050/', // url + pathPrefix
  favicon: 'static/images/manifest-logo.png', // Used for manifest favicon generation
  shortName: 'The C3 Academy', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Andrew', // Author for schemaORGJSONLD
  themeColor: '#2E293E',
  backgroundColor: '#FAC52D',
}
