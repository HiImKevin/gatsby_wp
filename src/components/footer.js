import * as React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import { useFooterMenuQuery } from "../hooks/useFooterMenuQuery"

const Footer = () => {
  const { site, wpMenu } = useFooterMenuQuery()
  return (
    <div
      style={{
        minHeight: `130px`,
        backgroundColor: `fuchsia`,
        marginTop: `auto`,
      }}
    >
      <Navigation menu={wpMenu.menuItems.nodes} />
    </div>
  )
}

export default Footer
