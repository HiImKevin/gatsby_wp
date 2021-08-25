import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
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
