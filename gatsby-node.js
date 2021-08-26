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
  const template = require.resolve(`./src/templates/page.jsx`)

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      console.log("******************************")
      console.log(page)
      actions.createPage({
        path: page.uri,
        component: template,
        context: page,
      })
    })
  }
}
