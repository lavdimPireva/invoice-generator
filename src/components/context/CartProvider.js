import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { generateInvoice } from "../InvoiceCalculator/InvoiceCalculator";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [showInvoices, setShowInvoices] = useState(false);

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

  const removeFromCart = (index) => {
    const product = cart[index];
    if (product.quantity > 1) {
      setCart(
        cart.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const checkout = () => {
    const generatedInvoices = generateInvoice(cart);
    setInvoices(generatedInvoices);
    setShowInvoices(true);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, checkout, invoices }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
