import React, { useState } from "react";
import Book from "../components/book/book";
import { Filter } from "../components/book/filter";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  return (
    <div id="books-bg">
      <section className="container-2">
        <div className="books-header">
          <h2 className="section-title books-header--title">
            All <span className="purple">Books</span>
          </h2>
          <Filter books={books} setBooks={setBooks} />
        </div>
        <div className="books">
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Books;
