import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import { useCartContext } from "./components/context/CartContext";
import { products } from "./components/Product/Product";
import { Link } from "react-router-dom";

function App() {
  const { checkout } = useCartContext();

  const productsList = products;

  return (
    <div style={{ backgroundColor: "#eaeded" }}>
      <NavBar />
      <ProductList products={productsList} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
          fontSize: "24px",
          border: "0",
        }}
      >
        <Link to="/checkout">
          <button
            style={{
              backgroundColor: "#0073cf",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
            }}
            onClick={checkout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
