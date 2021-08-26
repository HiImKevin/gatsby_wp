import { graphql } from "gatsby"
import React from "react"
import parse, { attributesToProps } from "html-react-parser"
import Layout from "../components/layout"
import isBoolean from "lodash.isboolean"
import isEmpty from "lodash.isempty"
import Hero from "../components/hero"
function isBooleanString(string) {
  return string === "true" || string === "false"
}

function isJSON(string) {
  if (typeof string !== "string") return false
  if (isBooleanString(string)) return false

  try {
    JSON.parse(string)
  } catch (error) {
    return false
  }

  return true
}
const components = {
  hero: Hero,
}

function toCamelCase(string) {
  return string.replace(/([-_][a-z])/g, group =>
    group.toUpperCase().replace("-", "").replace("_", "")
  )
}

function transformValue(value) {
  if (isJSON(value)) {
    const parsedJSON = JSON.parse(value)

    if (Array.isArray(parsedJSON))
      return parsedJSON.map(item => transformProps(item))
    if (typeof parsedJSON === "object" && parsedJSON !== null)
      return transformProps(parsedJSON)

    return parsedJSON
  }

  if (Array.isArray(value)) return value.map(item => transformProps(item))
  if (typeof value === "object" && value !== null) return transformProps(value)

  if (isBooleanString(value)) return value === "true"

  return value
}

function transformProps(props) {
  const transformedProps = {}

  Object.keys(props).forEach(propName => {
    const transformedValue = transformValue(props[propName])
    if (
      !transformedValue &&
      isEmpty(transformedValue) &&
      !isBoolean(transformedValue)
    )
      return
    transformedProps[toCamelCase(propName)] = transformedValue
  })

  return transformedProps
}

const WpPage = ({
  data: {
    wpPage: { seo, content },
  },
  pageContext,
}) => {
  // https://github.com/remarkablemark/html-react-parser#htmlparser2
  // The library does parsing on client side differently from server side
  // it results in having a need of passing htmlparser2 to adjust behavior
  // according to the client side behavior
  const reactedContent = parse(content, {
    htmlparser2: {
      lowerCaseAttributeNames: true,
    },
    replace: domNode => {
      if (domNode.type === "tag") {
        const Component = components[domNode.name]

        if (!Component) return null

        const props = transformProps(attributesToProps(domNode.attribs))

        return <Component {...props} />
      }
    },
  })

  return (
    <Layout seo={seo} pageContext={pageContext}>
      <div style={{ maxWidth: `960px`, margin: `20px auto` }}>
        {reactedContent}
      </div>
    </Layout>
  )
}

// const WpPage = ({
//   data: {
//     wpPage: { title, content, id },
//   },
// }) => {
//   return (
//     <Layout>
//       <div
//         className={`post-${id}`}
//         style={{
//           padding: `30px`,
//           margin: `30px 0`,
//           backgroundColor: `#fff`,
//           borderRadius: `15px`,
//           boxShadow: `0px 3px 15px rgba(0,0,0,0.2)`,
//           width: `800px`,
//         }}
//       >
//         <h1>{title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       </div>
//     </Layout>
//   )
// }

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
