import React from "react"
import { Link } from "gatsby"
import { navActive, dropdownMenu } from "./navigation.module.css"
const Navigation = ({ menu }) => (
  <ul style={{ display: `flex`, listStyleType: `none`, margin: `0` }}>
    {menu.map(mainItem =>
      !mainItem.parentId ? (
        <li style={{ padding: `20px` }} key={mainItem.id}>
          <Link
            style={{ textDecoration: `none` }}
            to={mainItem.url}
            activeClassName={navActive}
          >
            {mainItem.label}
            {mainItem.childItems.nodes.length !== 0 && (
              <div style={{ display: `inline` }}>&#8964;</div>
            )}
          </Link>
          {mainItem.childItems.nodes.length !== 0 ? (
            <ul className={dropdownMenu}>
              {mainItem.childItems.nodes.map(childItem => (
                <li key={childItem.id}>
                  <Link
                    style={{ textDecoration: `none` }}
                    to={childItem.url}
                    activeClassName={navActive}
                  >
                    {childItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ) : null
    )}
  </ul>
)

export default Navigation
