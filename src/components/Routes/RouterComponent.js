import React from "react";
import App from "../../App";
import Checkout from "../Checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const RouterComponent = () => {
  const { invoices } = useCartContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<Checkout invoices={invoices} />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
