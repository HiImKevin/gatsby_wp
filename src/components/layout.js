/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MainContext from "../context/main"
import SEO from "./seo/seo"
import "./layout.css"

const Layout = ({ seo, children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <MainContext.Provider value={pageContext}>
      {seo && <SEO {...seo} />}
      <div
        style={{ minHeight: `100vh`, display: `flex`, flexDirection: `column` }}
      >
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </MainContext.Provider>
  )
}

export const query = graphql`
  fragment wpPageSeo on WpPage {
    seo {
      canonical
      cornerstone
      focuskw
      metaDesc
      metaKeywords
      title
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
