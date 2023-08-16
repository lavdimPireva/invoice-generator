import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
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
      <Link to="/checkout">
        <button onClick={checkout}>Checkout</button>
      </Link>
    </div>
  );
}

export default App;
