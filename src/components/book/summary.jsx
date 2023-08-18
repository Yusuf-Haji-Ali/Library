import React from "react";

export const Summary = ({ book }) => {
  return (
    <div className="book-summary">
      <h3 className="book-summary--title">Summary</h3>
      <p className="book-summary--para">{book.summary1}</p>
      <p className="book-summary--para">{book.summary2}</p>
    </div>
  );
};
