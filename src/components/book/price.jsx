import React from "react";

const Price = ({ originalPrice, salePrice }) => {
  return (
    <div className="book-selected--price">
      <div className="book-price">
        {salePrice ? (
          <p className="price">
            <span className="sale">£{originalPrice.toFixed(2)}</span>£
            {salePrice.toFixed(2)}
          </p>
        ) : (
          <p className="price">£{originalPrice.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Price;
