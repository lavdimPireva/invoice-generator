import React, { useContext } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};
