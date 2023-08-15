import React from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import { useCartContext } from "./components/context/CartContext";
import { products } from "./components/Product/Product";

function App() {
  const { addToCart, cart, removeFromCart, checkout } = useCartContext();

  const productsList = products;

  return (
    <div className="">
      <NavBar />
      <ProductList addToCart={addToCart} products={productsList} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default App;
