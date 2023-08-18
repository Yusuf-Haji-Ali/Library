import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav-container">
        <button className="btn-menu click" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>

        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>

        <ul className="nav-links">
          <li className="nav-list">
            <Link
              to="/"
              className="nav-link link-hover--effect link-hover--effect-purple"
            >
              Home
            </Link>
          </li>

          <li className="nav-list">
            <Link to="/books" className="nav-link nav-link--primary click">
              Books
            </Link>
          </li>

          <li className="nav-icon">
            <Link to="/registration" className="nav-link">
              <FontAwesomeIcon icon={"user"} />
            </Link>
          </li>

          <li className="nav-icon">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart-length">{numberOfItems}</span>
            )}
          </li>
        </ul>

        <div className="menu-backdrop">
          <button className="btn-menu btn-menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu-links">
            <li className="menu-list">
              <Link
                to="/"
                className="menu-link link-hover--effect link-hover--effect-white"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="/books"
                className="menu-link link-hover--effect link-hover--effect-white"
                onClick={closeMenu}
              >
                Books
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="/cart"
                className="menu-link link-hover--effect link-hover--effect-white"
                onClick={closeMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
