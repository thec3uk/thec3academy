import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => (
  <StaticQuery
    query={query}
    render={(data) => {
      console.log(data)
      const {
        site: {
          siteMetadata: { siteUrl },
        },
        prismicSiteConfig: {
          data: {
            defaultTitle,
            alt_title,
            short_title,
            defaultDescription,
            defaultBanner,
            twitter_username,
          },
          lang,
        },
      } = data
      const seo = {
        title: title || defaultTitle,
        description: defaultDescription || desc,
        image: defaultBanner.url,
        url: siteUrl,
      }
      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
          alternateName: alt_title || '',
        },
      ]
      return (
        <Helmet title={defaultTitle + ' : ' + seo.title}>
          <html lang={lang} />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="apple-mobile-web-app-title" content={short_title} />
          <meta name="application-name" content={short_title} />
          <link rel="canonical" href={seo.url} />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
          {/* OpenGraph  */}
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content={null} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={twitter_username} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Helmet>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
    prismicSiteConfig {
      data {
        defaultTitle: title
        alt_title
        short_title
        defaultDescription: description
        defaultBanner: banner {
          url
        }
        twitter_username
      }
      lang
    }
  }
`
