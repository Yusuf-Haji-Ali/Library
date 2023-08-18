import React from "react";

export const Filter = ({ books, setBooks }) => {
  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  return (
    <select
      id="filter"
      defaultValue="SORT"
      onChange={(event) => filterBooks(event.target.value)}
    >
      <option value="SORT" disabled>
        Sort
      </option>
      <option value="LOW_TO_HIGH">Price, Low to High</option>
      <option value="HIGH_TO_LOW">Price, High to Low</option>
      <option value="RATING">Rating</option>
    </select>
  );
};
