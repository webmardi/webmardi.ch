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
import NewsletterForm from "./NewsletterForm"
import "normalize.css/normalize.css"
import "./layout.scss"

import Antistatique from '../svg/sponsors/antistatique'
import Liip from '../svg/sponsors/liip';

const sponsors = [Antistatique, Liip];

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
      <footer className="footer">
        <div className="container">
          <h2 className="text-secondary font-weight-medium">Our amazing sponsors</h2>
          <div className="sponsors">
            {[0,1].map(i => (
              <div className={`track track${i}`} key={i}>
                {sponsors.map(Logo => <Logo/>)}
                {/* Repeat this twice for now, because there are two sponsors. */}
                {sponsors.map(Logo => <Logo/>)}
              </div>
            ))}
          </div>
          <h2 className="text-secondary font-weight-medium">Subscribe our newsletter</h2>
          <NewsletterForm />
          <div className="footer-copy">
            <small className="text-secondary">
              <a href="http://www.nerval.ch/" target="_blank" rel="noopener noreferrer">Pierre</a> & <a href="https://toni.dev" target="_blank" rel="noopener noreferrer">Toni</a>
            </small>
            <small className="text-secondary">
              <a href="mailto:contact@webmardi.ch">contact@webmardi.ch</a>
            </small>
            <small className="text-secondary">
              © Webmardi {new Date().getFullYear()}
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
