import React from "react";

export const CartBook = ({ book, removeFromCart, changeQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-book">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          className="cart-book--img"
        />
        <div className="cart-book--info">
          <span className="cart-book--title">{book.title}</span>
          <span className="cart-book--price">
            £{(book.salePrice || book.originalPrice).toFixed(2)}
          </span>
          <button
            className="cart-book--remove"
            onClick={() => removeFromCart(book)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart-quantity">
        <input
          type="number"
          className="cart-input"
          min={0}
          max={99}
          value={book.quantity}
          onChange={(event) => changeQuantity(book, event.target.value)}
        />
      </div>
      <div className="cart-total">
        £{((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
      </div>
    </div>
  );
};
