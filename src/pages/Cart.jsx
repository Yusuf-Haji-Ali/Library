import React from "react";
import { EmptyCart } from "../components/cart/empty-cart-template";
import { CartTotal } from "../components/cart/cart-total";
import { CartBook } from "../components/cart/cart-book";

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
  return (
    <div id="books-bg">
      <div className="container-2">
        {/* Show Empty cart if empty */}
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="cart">
            <h2 className="cart-title">Cart</h2>
            <div className="cart-header">
              <span className="cart-book">Book</span>
              <span className="cart-quantity">Quantity</span>
              <span className="cart-total">Total</span>
            </div>

            <div className="cart-body">
              {/* Show books added to cart */}
              {cart.map((book) => {
                return (
                  <CartBook
                    book={book}
                    removeFromCart={removeFromCart}
                    changeQuantity={changeQuantity}
                  />
                );
              })}

              {/* Show total price in cart if not emtpy  */}
              {cart.length > 0 && <CartTotal cart={cart} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
