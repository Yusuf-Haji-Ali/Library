import React from "react";
import { Link, useParams } from "react-router-dom";
// Components
import Rating from "../components/book/rating";
import Price from "../components/book/price";
import { Recommended } from "../components/book/recommended";
import { Summary } from "../components/book/summary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  const isBookInCart = () => {
    return cart.find((book) => +book.id === +id);
  };

  // Display a loading state while book data is being fetched
  if (!book) {
    return (
      <div className="book-info--loading">
        <FontAwesomeIcon
          icon={faSpinner}
          className="book-info--loading-icon"
          spin
        />
      </div>
    );
  }

  return (
    <div className="container-2">
      <div className="book-info--option">
        <Link to="/books">
          <FontAwesomeIcon icon="arrow-left" style={{ color: "#7342d6" }} />
        </Link>

        <Link to="/books" className="book-link">
          <h2 className="link-hover--effect link-hover--effect-purple">
            Books
          </h2>
        </Link>
      </div>

      <div className="book-info">
        <figure className="book-info--figure">
          <img
            src={book.cover}
            alt={`Book Cover of: ${book.title}`}
            className="book-info--img"
          />
        </figure>

        <div className="book-info--description">
          <h2 className="book-info--title">{book.title}</h2>

          <Rating rating={book.rating} />

          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />

          <Summary book={book} />

          {isBookInCart() ? (
            <Link to="/cart">
              <button className="btn">Checkout</button>
            </Link>
          ) : (
            <button className="btn" onClick={() => addToCart(book)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
      {/* Recommended books section */}
      <Recommended books={books} id={id} />
    </div>
  );
};

export default BookInfo;
