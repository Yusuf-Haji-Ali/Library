import React from "react";
import FooterLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row-column">
          <Link to="/">
            <figure className="footer-logo">
              <img src={FooterLogo} alt="Footer Logo" className="footer-img" />
            </figure>
          </Link>
          <div className="footer-list">
            <Link to="/" className="footer-link">
              <FontAwesomeIcon icon="house" className="click" />
            </Link>
            <Link to="/books" className="footer-link">
              <FontAwesomeIcon icon="book-open" className="click" />
            </Link>
            <Link to="/Cart" className="footer-link">
              <FontAwesomeIcon icon="shopping-cart" className="click" />
            </Link>
          </div>
          <div className="footer-copyright">Copyright &copy; Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
