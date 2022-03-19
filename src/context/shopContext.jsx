import { createContext, useEffect, useState } from "react";

import PRODUCTS from "../shopData";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  useEffect(() => {}, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
