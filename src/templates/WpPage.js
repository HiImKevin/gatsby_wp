import { graphql } from "gatsby"

import React from "react"

const WpPage = ({
    data: {
      wpPage: { title, content, id },
    },
  }) => {
    return (
      <div className={`post-${id}`}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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