import React from "react";
import Book from "./book";

export const Recommended = ({ books, id }) => {
  return (
    <div className="container-2">
      <div className="row">
        <div className="book-selected--top">
          <h2 className="book-selected--title--top">Recommended Books</h2>
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
  );
};
