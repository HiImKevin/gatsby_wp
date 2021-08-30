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
        socialMenu {
          socialArray {
            socialName
            socialUrl
          }
        }
        menuItems {
          nodes {
            label
            path
            parentId
            id
            childItems {
              nodes {
                label
                path
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
