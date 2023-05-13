import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  const cartQuantity = 0;

  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <button className="btn__menu click" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>

        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link
              to="/"
              className="nav__link link__hover--effect link__hover--effect-purple"
            >
              Home
            </Link>
          </li>

          <li className="nav__list">
            <Link to="/books" className="nav__link nav__link--primary click">
              Books
            </Link>
          </li>

          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link
                to="/"
                className="menu__link link__hover--effect link__hover--effect-white"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/books"
                className="menu__link link__hover--effect link__hover--effect-white"
                onClick={closeMenu}
              >
                Books
              </Link>
            </li>
            <li className="menu__list">
              <a
                href="/"
                className="menu__link link__hover--effect link__hover--effect-white no-cursor"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className="menu__list">
              <Link
                to="/cart"
                className="menu__link link__hover--effect link__hover--effect-white"
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
