import React from "react"
import Layout from "../templates/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <Layout headerText="About this website">
      <h2>{data.site.siteMetadata.title}</h2>
      <p>{data.site.siteMetadata.description}</p>

      <p>
        This website has been made based on the tutorial{" "}
        <a href="https://www.gatsbyjs.org/tutorial/part-one/">
          Get to Know Gatsby Building Blocks.
        </a>{" "}
        provided by official's Gatsby documentation.
      </p>

      <p>
        The layout has adapted from{" "}
        <a href="https://startbootstrap.com/themes/clean-blog/">Clean Blog Template</a>{" "}
        which is based on{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a>
      </p>

      <p>
        All icons has been implemented by{" "}
        <a href="https://github.com/FortAwesome/react-fontawesome">
          react-fontawesome
        </a>{" "}
        which is a version of{" "}
        <a href="https://fontawesome.com/icons?d=gallery">Font Awesome</a> running on the react environment.
      </p>
    </Layout>
  )
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
