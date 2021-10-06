exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPage } = result.data

  // Define the template to use
  let template
  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      if (page.id === "cG9zdDo1")
        template = require.resolve(`./src/templates/index.jsx`)
      else template = require.resolve(`./src/templates/page.jsx`)

      actions.createPage({
        path: page.uri,
        component: template,
        context: page,
      })
    })
  }
}
