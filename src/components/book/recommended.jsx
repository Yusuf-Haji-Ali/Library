import React from "react";
import Book from "./book";

export const Recommended = ({ books, id }) => {
  return (
    <div className="container-2">
      <div className="row">
        <h2 className="recommended-title">
          Recommended <span className="purple">Books</span>
        </h2>
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
  );
};
