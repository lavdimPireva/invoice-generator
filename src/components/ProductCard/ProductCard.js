import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img
        src="https://ambrosiamagazine.com/wp-content/uploads/2020/02/zaros-mineral-water-greek-food-news.jpg"
        className="card-img-top p-4 ms-4"
        style={{ width: "25rem" }}
        alt="Bottle of Water"
      />
      <div className="card-body p-4">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">VAT: {product.VAT}%</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
