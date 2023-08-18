import React from "react";
import Book from "./book/book";

const Discounted = ({ books }) => {
  return (
    <section id="discounted-books">
      <div className="container">
        <div className="row">
          <div className="content">
            <h2>
              Discounted <span className="purple">Books</span>
            </h2>
            <div className="books">
              {books
                .filter((book) => book.salePrice > 0)
                .slice(0, 8)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
