import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const { addToCart } = useCartContext();

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setError("Quantity cannot be negative");
    } else {
      setError("");
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0 || error) {
      setError("Please enter a valid quantity");
      return;
    }

    console.log("quantity", quantity);

    const cartItem = {
      id: product.id,
      name: product.name,
      VAT: product.VAT,
      price: product.price,
      discount: product.discount || 0,
      quantity: parseInt(quantity),
    };

    addToCart(cartItem);
  };

  return (
    <div className="card ms-5" style={{ width: "30rem", height: "45rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        style={{ height: "25rem", width: "30rem" }}
        alt="Bottle of Water"
      />
      <div className="card-body p-4">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">VAT: {product.VAT}%</p>
        {product.discount ? (
          <p className="card-text">Discount: {product.discount * 100}%</p>
        ) : (
          <p className="card-text">No discount for this product</p>
        )}

        <div className="d-flex align-center ">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            className="ms-2"
            onChange={handleQuantityChange}
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="btn btn-primary mt-5 d-block mx-auto "
        >
          Add to Cart
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
