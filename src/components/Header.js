import PropTypes from "prop-types"
import React from "react"

import Webmardi from "../svg/webmardi"

import * as socialsSVG from "../svg/socials"

const socials = [
  {
    title: "Facebook",
    Svg: socialsSVG.Facebook(),
    url: "https://www.facebook.com/webmardi",
  },
  {
    title: "Twitter",
    Svg: socialsSVG.Twitter(),
    url: "https://www.twitter.com/webmardi",
  },
  {
    title: "Youtube",
    Svg: socialsSVG.Youtube(),
    url: "https://www.youtube.com/webmardi",
  },
  {
    title: "Instagram",
    Svg: socialsSVG.Instagram(),
    url: "https://www.instagram.com/webmardi",
  },
]

const Header = ({ siteTitle }) => (
  <header className="header bg-main">
    <div className="container">
      <h1 className="sr-only">{siteTitle}</h1>
      <Webmardi />
      <div className="header-socials">
        {socials.map((social, i) => (
          <a
            href={social.url}
            title={social.title}
            target="_blank"
            key={i}
            rel="noopener noreferrer"
          >
            {social.Svg}
          </a>
        ))}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
