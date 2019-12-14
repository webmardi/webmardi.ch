import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import NextSession from "../components/NextSession"
import { graphql } from "gatsby"
import Slider from "../components/Slider"

const IndexPage = props => {
  const { edges: sessions } = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />

      <NextSession session={sessions[0].node} />

      <div className="bg-white">

        <div className="grid-layout container">
          <h2 className="display-1 mb-0">Who are we?</h2>
          <p className="lead mb-0">{props.data.site.siteMetadata.description}</p>
        </div>

        <Slider images={props.data.allFile.edges} />

      </div>
    </Layout>
  )
}

export const query = graphql`
  query FirstFeatured {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            time: date(formatString: "HH:mm")
            htmlDate: date(formatString: "YYYY-MM-DDTHH:mm")
            speaker
            job
            location
            url
          }
        }
      }
    }
    allFile( filter: { relativeDirectory: { eq: "images-slider" } } ) {
      edges {
        node {
          id
          childImageSharp {
              fluid(maxHeight: 415, maxWidth: 415) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
