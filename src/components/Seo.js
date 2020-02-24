/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          "rel": "apple-touch-icon",
          "sizes": "180x180",
          "href": "./favicons/apple-touch-icon.png",
        },
        {
          "rel": "icon",
          "sizes": "32x32",
          "type": "image/png",
          "href": "./favicons/favicon-32x32.png",
        },
        {
          "rel": "icon",
          "sizes": "16x16",
          "type": "image/png",
          "href": "./favicons/favicon-16x16.png",
        },
        {
          "rel": "manifest",
          "href": "./favicons/site.webmanifest",
        },
        {
          "rel": "mask-icon",
          "color": "#2525a5",
          "href": "./favicons/safari-pinned-tab.svg",
        }
      ]}
      meta={[
        {
          name: `msapplication-TileColor`,
          content: "#ffffff",
        },
        {
          name: `theme-color`,
          content: "#2525a5",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
