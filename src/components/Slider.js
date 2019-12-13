import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const Slider = ({ images }) => (
  <div className="slider">
    {images.map(({ node }) => (
      <div key={node.id}>
        <Img fluid={node.childImageSharp.fluid} alt="" />
      </div>
    ))}
  </div>
)

export default Slider
