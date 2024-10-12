import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./footer";

import "../styles/main.scss"
import * as layoutStyles from "../styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
