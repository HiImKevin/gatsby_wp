import { useStaticQuery, graphql } from "gatsby"

export const useFooterMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "footerMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return data
}
