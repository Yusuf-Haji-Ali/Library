import React from "react";

export const CartTotal = ({ cart }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };

  return (
    <div className="total">
      <div className="total-price">
        <span>Total</span>
        <span>£{total().toFixed(2)}</span>
      </div>
      <button
        className="btn btn-checkout no-cursor"
        onClick={() => alert("This has not been impemented :(")}
      >
        Proceed to checkout
      </button>
    </div>
  );
};
