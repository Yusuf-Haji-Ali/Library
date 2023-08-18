import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Price from "./price";

const Book = ({ book }) => {
  const [bookCover, setBookCover] = useState();

  setTimeout(() => {
    setBookCover(book.cover);
  }, 1500);

  return (
    <div className="book">
      {bookCover ? (
        <Link to={`/books/${book.id}`}>
          <figure className="book-img--wrapper">
            <img src={bookCover} alt="" className="book-img" />
          </figure>
          <div className="book-title">{book.title}</div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </Link>
      ) : (
        <div className="lazy-loading">
          <div className="book-img--skeleton"></div>
          <div className="skeleton book-title--skeleton"></div>
          <div className="skeleton book-rating--skeleton"></div>
          <div className="skeleton book-price--skeleton"></div>
        </div>
      )}
    </div>
  );
};

export default Book;
