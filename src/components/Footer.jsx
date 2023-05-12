import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link
              to="/"
              className="footer__link link__hover--effect link__hover--effect-white"
            >
              Home
            </Link>
            <span
              href="/"
              className="footer__link link__hover--effect link__hover--effect-white no-cursor"
            >
              About
            </span>
            <Link
              to="/books"
              className="footer__link link__hover--effect link__hover--effect-white"
            >
              Books
            </Link>
            <Link
              to="/Cart"
              className="footer__link link__hover--effect link__hover--effect-white"
            >
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
