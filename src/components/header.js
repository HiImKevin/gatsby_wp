import * as React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import { useMenuQuery } from "../hooks/useMenuQuery"

const Header = () => {
  const { site, wpMenu } = useMenuQuery()
  return (
    <div
      style={{
        height: `90px`,
        backgroundColor: `#1fe01f`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 style={{ marginBottom: 0 }}>{site.siteMetadata.title}</h1>
      <Navigation menu={wpMenu.menuItems.nodes} />
    </div>
  )
}

export default Header
