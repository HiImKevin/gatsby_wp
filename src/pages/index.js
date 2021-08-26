import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout
    style={{ minHeight: `100vh`, display: `flex`, flexDirection: `column` }}
  >
    <Seo title="Home" />
    <Hero />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

    <h1>My WordPress Blog</h1>
    <h4>Posts</h4>
    {data.allWpPage.edges.map(({ node }) => (
      <div>
        <Link to={node.uri}>{node.title}</Link>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPage {
      edges {
        node {
          title
          id
          uri
        }
      }
    }
  }
`
