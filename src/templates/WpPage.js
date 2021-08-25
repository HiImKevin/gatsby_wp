import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const WpPage = ({
  data: {
    wpPage: { title, content, id },
  },
}) => {
  return (
    <Layout>
      <div
        className={`post-${id}`}
        style={{
          padding: `30px`,
          margin: `30px 0`,
          backgroundColor: `#fff`,
          borderRadius: `15px`,
          boxShadow: `0px 3px 15px rgba(0,0,0,0.2)`,
          width: `800px`,
        }}
      >
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export default WpPage

export const query = graphql`
  query ($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`
