import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import { fetchBooksData } from "./firebase"; // Book data from Firebase
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { Registration } from "./pages/Registration";

const App = () => {
  const [cart, setCart] = useState([]); // State to manage the cart items
  const [books, setBooks] = useState([]); // State to manage the books data

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Fetch the books data from Firebase and update the state
    fetchBooksData()
      .then((booksData) => {
        setBooks(booksData);
        console.log(booksData);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching books data:", error);
      });
  }, []);

  const addToCart = (book) => {
    setCart([...cart, { ...book, quantity: 1 }]); // Add a book to the cart with a quantity of 1
  };

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item.id !== book.id)); // Remove a book from the cart
  };

  const numberOfItems = () => {
    let itemCounter = 0; // Counter for the total number of items in the cart
    cart.forEach((item) => (itemCounter += item.quantity)); // Calculate the total quantity of items in the cart
    return itemCounter;
  };

  const changeQuantity = (book, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity, // Update the quantity of a book in the cart
            }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact render={() => <Home books={books} />} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/registration" exact render={() => <Registration />} />
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
      </div>
    </Router>
  );
};

export default App;
