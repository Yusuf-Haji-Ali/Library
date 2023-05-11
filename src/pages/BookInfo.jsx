import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/rating";
import Price from "../components/ui/price";
import Book from "../components/ui/book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function bookExistsOnCart() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div className="books__body">
      <div className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>

              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt={"Book Cover of: " + book.title}
                  className="book__selected--img"
                />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>

                <Rating rating={3} />

                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  ></Price>
                </div>

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt eaque obcaecati porro veritatis, ullam quos quam
                    possimus, sunt quo corrupti, vero labore beatae deleniti cum
                    provident suscipit. Illum, dolores totam?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt eaque obcaecati porro veritatis, ullam quos quam
                    possimus, sunt quo corrupti, vero labore beatae deleniti cum
                    provident suscipit. Illum, dolores totam?
                  </p>
                </div>

                {bookExistsOnCart() ? (
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
          </div>
        </div>
      </div>

      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <h2 className="book__selected--title--top">Recommended Books</h2>
          </div>
          <div className="books">
            {books
              .filter((book) => book.rating === 5 && +book.id !== +id)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
