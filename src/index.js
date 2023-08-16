import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./components/context/CartProvider";
import RouterComponent from "./components/Routes/RouterComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterComponent />
    </CartProvider>
  </React.StrictMode>
);
