/* eslint-disable react/prop-types */
import { graphql } from "gatsby"
import parse, { attributesToProps } from "html-react-parser"
import isBoolean from "lodash.isboolean"
import isEmpty from "lodash.isempty"
import React from "react"

import Hero from "../components/hero/hero"
import CTA from "../components/cta/cta"
import CTA2 from "../components/cta2/cta2"
import Layout from "../components/layout"

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
  const transformedProps = {};
  Object.keys(props).forEach((propName) => {

    const transformedValue = transformValue(props[propName]);
    if (!transformedValue && isEmpty(transformedValue) && !isBoolean(transformedValue)) return;
    transformedProps[toCamelCase(propName)] = transformedValue;
  });
  return transformedProps;
}

const components = {
  hero: Hero,
  cta: CTA,
  cta2: CTA2
}

const Page = ({
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
      {reactedContent}
    </Layout>
  )
}

export default Page

export const query = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      content
    }
  }
`
