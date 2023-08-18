import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EmptyCartImage from "../../assets/empty_cart.svg";

export const EmptyCart = () => {
  return (
    <div className="cart-empty">
      <img
        src={EmptyCartImage}
        alt="Empty Cart Template"
        className="cart-empty--img"
      />
      <h3 className="cart-empty--message">Your cart is currently empty :(</h3>
      <Link to="/books">
        <button className="btn">Browse Books</button>
      </Link>
    </div>
  );
};
