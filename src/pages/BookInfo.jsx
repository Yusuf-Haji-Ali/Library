import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/rating";
import Price from "../components/ui/price";

const BookInfo = ({ books }) => {
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
                  src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                  alt=""
                />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Cracking the coding interview
                </h2>
                <Rating rating={3} />
                <div className="book__Selected--price">
                  <Price originalPrice={50} salePrice={null}></Price>
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
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
                <button className="btn">Add to cart</button>
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
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
