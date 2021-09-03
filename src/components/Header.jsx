import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { selectSession } from "../app/sessionSlice";

/**
 * Header component to show navigation bar and menus
 * @returns {header} renders the menus based on the authentication status
 */
const Header = () => {
  const session = useSelector(selectSession);

  const authenticatedMenus = (
    <>
      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
        <Link to="/"> Home </Link>
      </li>
      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <Link to="/about"> About </Link>
      </li>
      <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
        <Link to="/logout"> Logout </Link>
      </li>
    </>
  );

  const unauthenticatedMenus = (
    <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
      <Link to="/login"> Login </Link>
    </li>
  );

  return (
    <header
      className="site-header"
      role="banner"
      itemScope="itemscope"
      itemType="http://schema.org/WPHeader"
    >
      <h1
        className="site-title"
        itemScope
        itemType="http://schema.org/Organization"
      >
        10up Blog
      </h1>

      <nav
        className="site-navigation"
        role="navigation"
        itemScope="itemscope"
        itemType="http://schema.org/SiteNavigationElement"
      >
        <a
          href="#menu-main-nav"
          id="js-menu-toggle"
          className="site-menu-toggle"
        >
          <span className="screen-reader-text">Primary Menu</span>
          <span aria-hidden="true">☰</span>
        </a>

        <ul id="menu-main-nav" className="primary-menu">
          {session.isAuthenticated ? authenticatedMenus : unauthenticatedMenus}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
