import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeFromCart(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  function numberOfItems() {
    let itemCounter = 0;
    cart.forEach((item) => (itemCounter += item.quantity));
    return itemCounter;
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route
        path="/books/:id"
        render={() => (
          <BookInfo books={books} addToCart={addToCart} cart={cart} />
        )}
      />
      <Route
        path="/cart"
        render={() => (
          <Cart
            cart={cart}
            changeQuantity={changeQuantity}
            removeFromCart={removeFromCart}
          />
        )}
      />
      <Footer />
    </Router>
  );
}

export default App;
