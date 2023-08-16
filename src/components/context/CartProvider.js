import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { generateInvoice } from "../InvoiceCalculator/InvoiceCalculator";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const checkout = () => {
    const generatedInvoices = generateInvoice(cart);
    setInvoices(generatedInvoices);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, checkout, invoices }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
