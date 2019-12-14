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
      <footer className="footer">
        <div className="container">
          <h2 className="text-secondary font-weight-medium">Our amazing sponsors</h2>
          <div className="sponsors">
            {[0,1].map(i => (
              <div className={`track track${i}`} key={i}>
                <div className="logo" style={{display: 'flex'}}>
                  <svg height={35} className="logo__L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.7 49">
                    <path fill="var(--color-white)" d="M0.1,46.8h29.6v-9.7H11.2V2.5H0.4v44.3H0.1z M0.1,46.8h29.6v-9.7H11.2V2.5H0.4v44.3H0.1z"/>
                  </svg>
                  <svg height={35} className="logo__II" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.8 49">
                    <path fill="var(--color-white)" d="M13.5,48.3L35.2,5.1l-9.6-4.9L3.8,43.4L13.5,48.3 M38.6,48.3L60.4,5.1l-9.7-4.9L28.9,43.4 L38.6,48.3"/>
                  </svg>
                  <svg height={35} className="logo__P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.9 49">
                    <path fill="var(--color-white)" d="M3.4,2.5v44.3h10.8V31h6.6c9.8,0,15-7,15-14.2c0-7.3-5.3-14.2-15-14.2H3.4L3.4,2.5z M14.3,12.3 h6.1c3,0,4.7,2.2,4.7,4.5s-1.7,4.5-4.7,4.5h-6.1V12.3L14.3,12.3z"/>
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 61.9" height="35">
                  <path fill="var(--color-white)" className="st0"
                        d="M156 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7h5.1v-6.4h-5.1V6.1l-7.4 4v6.2H142v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c0-.1-2.1.6-3.2.6zM92 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7H95v-6.4h-5V6.1l-7.4 4v6.2h-4.5v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c-.1-.1-2.1.6-3.3.6zM62.6 15.5c-2.9 0-6.4 1.8-8 4.4l-.5-3.7h-6.6V47h7.4V29.2c0-4.2 3.5-6.8 6.7-6.8 4.2 0 5.7 3.6 5.7 7V47h7.4V29c0-8.7-4.3-13.5-12.1-13.5zM286.4 33c0 4.2-3.6 6.8-6.8 6.8-3.5 0-4.7-1.8-4.7-7V16.3h-7.4v17.3c0 9.1 3.7 13.5 11.2 13.5 3.1 0 6.3-1.4 8.1-4.1l.3 3.4h6.6V16.3h-7.4V33zM210.8 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7h5.1v-6.4h-5.1V6.1l-7.4 4v6.2h-4.5v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c.1-.1-2 .6-3.2.6zM100.9 16.2h7.4V47h-7.4zM104.6 2.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2.1-4.5-4.5-4.5zM219.9 16.2h7.4V47h-7.4zM223.6 2.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM327.4 32.6c0-5.1-1.2-9.4-3.6-12.4-2.3-2.9-5.7-4.7-10.3-4.7-4.1 0-7.9 1.6-10.6 4.7-2.7 3-4.2 7.1-4.2 11.6 0 10.1 7.6 15.9 14.6 15.9 7.1 0 11.6-3.1 13.2-7.7l-7-2c-1.2 1.8-2.9 2.9-6.3 2.9-4.1 0-6.6-3.4-6.8-6.7h20.8c.2 0 .2-.9.2-1.6zm-20.7-4.2c.5-2.9 2.3-6.1 6.7-6.1s6 3 6.3 6.1h-13zM20.1 4.3L4.6 47h8.1l3-8.6H32l3 8.6h8.6L28.1 4.3h-8zm-2 26.9l5.7-16.5 5.6 16.5H18.1zM112.6 38.3c.9 5.8 6 9.5 13.2 9.5 8.8 0 13-4 13-9.3 0-5.6-3.9-8.3-10.1-10-6.6-1.8-7.6-2.4-7.6-3.9 0-1 1.1-2.6 4.2-2.6 3.4 0 5.2 1.6 5.8 3.5l7.2-1.2c-1.4-5.2-5.9-8.6-13-8.6-6.6 0-11.5 4.2-11.5 9.2 0 5.2 3.3 7.5 9.6 9 6.5 1.6 8.1 2.8 8.1 4.3 0 1.7-1.7 2.9-5.5 2.9-3.1 0-5.5-1.6-6-4.1l-7.4 1.3zM254.4 19.9c-1.2-2.4-4.1-4.3-7.7-4.3-8.1 0-14.3 7-14.3 16.3 0 9.2 5.9 15.9 13.9 15.9 3.2 0 6.5-2 7.8-4.8v16.2h7.4V16.3h-6.6l-.5 3.6zm-7.3 20.9c-4.1 0-7.4-4.1-7.4-9.2s3.3-9.2 7.4-9.2c4.1 0 7.4 4.1 7.4 9.2s-3.3 9.2-7.4 9.2zM193.3 40.3c-.8 0-1.5-.5-1.5-1.4V16.3h-6.6l-.5 3.6c-1.5-2.8-4.6-4.3-7.8-4.3-8.1 0-14.3 7-14.3 16.3 0 9.2 5.9 15.9 13.9 15.9 3.6 0 7.3-2.5 8.4-5 0 2.1 2 4.2 5.7 4.2 2.7 0 5-.7 5-.7v-6.6c.2-.1-1.3.6-2.3.6zm-15.9.5c-4.1 0-7.4-4.1-7.4-9.2s3.3-9.2 7.4-9.2c4.1 0 7.4 4.1 7.4 9.2s-3.3 9.2-7.4 9.2z"/>
                </svg>
                <div className="logo" style={{display: 'flex'}}>
                  <svg height={35} className="logo__L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.7 49">
                    <path fill="var(--color-white)" d="M0.1,46.8h29.6v-9.7H11.2V2.5H0.4v44.3H0.1z M0.1,46.8h29.6v-9.7H11.2V2.5H0.4v44.3H0.1z"/>
                  </svg>
                  <svg height={35} className="logo__II" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.8 49">
                    <path fill="var(--color-white)" d="M13.5,48.3L35.2,5.1l-9.6-4.9L3.8,43.4L13.5,48.3 M38.6,48.3L60.4,5.1l-9.7-4.9L28.9,43.4 L38.6,48.3"/>
                  </svg>
                  <svg height={35} className="logo__P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.9 49">
                    <path fill="var(--color-white)" d="M3.4,2.5v44.3h10.8V31h6.6c9.8,0,15-7,15-14.2c0-7.3-5.3-14.2-15-14.2H3.4L3.4,2.5z M14.3,12.3 h6.1c3,0,4.7,2.2,4.7,4.5s-1.7,4.5-4.7,4.5h-6.1V12.3L14.3,12.3z"/>
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 61.9" height="35">
                  <path fill="var(--color-white)" className="st0"
                        d="M156 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7h5.1v-6.4h-5.1V6.1l-7.4 4v6.2H142v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c0-.1-2.1.6-3.2.6zM92 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7H95v-6.4h-5V6.1l-7.4 4v6.2h-4.5v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c-.1-.1-2.1.6-3.3.6zM62.6 15.5c-2.9 0-6.4 1.8-8 4.4l-.5-3.7h-6.6V47h7.4V29.2c0-4.2 3.5-6.8 6.7-6.8 4.2 0 5.7 3.6 5.7 7V47h7.4V29c0-8.7-4.3-13.5-12.1-13.5zM286.4 33c0 4.2-3.6 6.8-6.8 6.8-3.5 0-4.7-1.8-4.7-7V16.3h-7.4v17.3c0 9.1 3.7 13.5 11.2 13.5 3.1 0 6.3-1.4 8.1-4.1l.3 3.4h6.6V16.3h-7.4V33zM210.8 40.3c-1.1 0-2.1-.6-2.1-1.8V22.7h5.1v-6.4h-5.1V6.1l-7.4 4v6.2h-4.5v6.4h4.5V40c0 3.4 2.1 7 8.1 7 2.8 0 4.6-.7 4.6-.7v-6.6c.1-.1-2 .6-3.2.6zM100.9 16.2h7.4V47h-7.4zM104.6 2.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2.1-4.5-4.5-4.5zM219.9 16.2h7.4V47h-7.4zM223.6 2.8c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM327.4 32.6c0-5.1-1.2-9.4-3.6-12.4-2.3-2.9-5.7-4.7-10.3-4.7-4.1 0-7.9 1.6-10.6 4.7-2.7 3-4.2 7.1-4.2 11.6 0 10.1 7.6 15.9 14.6 15.9 7.1 0 11.6-3.1 13.2-7.7l-7-2c-1.2 1.8-2.9 2.9-6.3 2.9-4.1 0-6.6-3.4-6.8-6.7h20.8c.2 0 .2-.9.2-1.6zm-20.7-4.2c.5-2.9 2.3-6.1 6.7-6.1s6 3 6.3 6.1h-13zM20.1 4.3L4.6 47h8.1l3-8.6H32l3 8.6h8.6L28.1 4.3h-8zm-2 26.9l5.7-16.5 5.6 16.5H18.1zM112.6 38.3c.9 5.8 6 9.5 13.2 9.5 8.8 0 13-4 13-9.3 0-5.6-3.9-8.3-10.1-10-6.6-1.8-7.6-2.4-7.6-3.9 0-1 1.1-2.6 4.2-2.6 3.4 0 5.2 1.6 5.8 3.5l7.2-1.2c-1.4-5.2-5.9-8.6-13-8.6-6.6 0-11.5 4.2-11.5 9.2 0 5.2 3.3 7.5 9.6 9 6.5 1.6 8.1 2.8 8.1 4.3 0 1.7-1.7 2.9-5.5 2.9-3.1 0-5.5-1.6-6-4.1l-7.4 1.3zM254.4 19.9c-1.2-2.4-4.1-4.3-7.7-4.3-8.1 0-14.3 7-14.3 16.3 0 9.2 5.9 15.9 13.9 15.9 3.2 0 6.5-2 7.8-4.8v16.2h7.4V16.3h-6.6l-.5 3.6zm-7.3 20.9c-4.1 0-7.4-4.1-7.4-9.2s3.3-9.2 7.4-9.2c4.1 0 7.4 4.1 7.4 9.2s-3.3 9.2-7.4 9.2zM193.3 40.3c-.8 0-1.5-.5-1.5-1.4V16.3h-6.6l-.5 3.6c-1.5-2.8-4.6-4.3-7.8-4.3-8.1 0-14.3 7-14.3 16.3 0 9.2 5.9 15.9 13.9 15.9 3.6 0 7.3-2.5 8.4-5 0 2.1 2 4.2 5.7 4.2 2.7 0 5-.7 5-.7v-6.6c.2-.1-1.3.6-2.3.6zm-15.9.5c-4.1 0-7.4-4.1-7.4-9.2s3.3-9.2 7.4-9.2c4.1 0 7.4 4.1 7.4 9.2s-3.3 9.2-7.4 9.2z"/>
                </svg>
              </div>
            ))}
          </div>
          <div className="footer-copy">
            <small className="text-secondary">
              <a href="http://www.nerval.ch/" target="_blank" rel="noopener noreferrer">Pierre</a> & <a href="https://toni.dev" target="_blank" rel="noopener noreferrer">Toni</a>
            </small>
            <small className="text-secondary">
              <a href="mailto:hello@webmardi.ch">hello@webmardi.ch</a>
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
