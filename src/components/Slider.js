import React from 'react';
import Img from 'gatsby-image';

const Slider = ({images}) => (
  <div className="slider">
    {images.map(({node}) => <div><Img key={node.id} fluid={node.childImageSharp.fluid} alt="" /></div>)}
  </div>
)

export default Slider;
