/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "normalize.css/normalize.css"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="footer bg-main">
        <div className="container">
          <h2 className="text-secondary">Our amazing sponsors</h2>
          <div className="sponsors">
            <div>Liip</div>
            <div>Antistatique</div>
          </div>
          <div className="footer-copy">
            <small className="text-secondary">
              Copyright © {new Date().getFullYear()}
            </small>
            <small className="text-secondary">
              Dev with love in Switzerland
            </small>
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
