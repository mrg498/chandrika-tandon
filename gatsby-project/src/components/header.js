import React, { useState } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import Sticky from "react-stickynode"

import * as headerStyles from "../styles/header.module.scss";
import "../styles/main.scss";

export default function Header() {
    const [ toggled, setToggled ] = useState(false);

	const toggleOverlay = () => {
		setToggled((toggled) => {
			return !toggled;
		});
    };

    const overlay = (
    <div className={headerStyles.overlay}>
        <ul className={headerStyles.navLinks}>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/">Home</Link>
            </li>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/profile">Profile</Link>
            </li>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/#music">Music</Link>
            </li>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/#moments">Moments</Link>
            </li>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/#media">Media</Link>
            </li>
            <li className={headerStyles.navLink}>
                <Link onClick={toggleOverlay} className={headerStyles.navLinkLink} activeClassName={headerStyles.activeLink} to="/moments">Moments Gallery</Link>
            </li>
        </ul>
    </div>
    )

	return (
    <header className={`${headerStyles.container}`}>
      <Sticky
        enabled={true}
        top={0}
        activeClass="activeStick"
        innerClass="stick"
        className="og"
        releasedClass="releasedStick"
        innerZ={100}
      >
        <nav className={`${headerStyles.nav}`}>
          <div
            onClick={() => scrollTo("#fixedHeader")}
            style={{ cursor: `pointer` }}
          >
            <span className={`${headerStyles.logo}`}>Chandrika Tandon</span>
            {/* <span className={`${headerStyles.logo}`}></span> */}
          </div>
          <div
            className={
              toggled
                ? `${headerStyles.hamburger} ${headerStyles.isActive}`
                : `${headerStyles.hamburger}`
            }
            style={{ zIndex: "5" }}
            onClick={toggleOverlay}
          >
            <div className={headerStyles.hamburgerLine} />
            <div className={headerStyles.hamburgerLine} />
            <div className={headerStyles.hamburgerLine} />
          </div>
        </nav>
      </Sticky>
      {toggled ? overlay : <></>}
    </header>
  )
}
