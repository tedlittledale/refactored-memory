import { createContext, useContext } from "react";

import products from "../../data/products";

const ProductContext = createContext();

export const AppWrapper = ({ children }) => {
  const { featured } = products;
  const carousel = products?.carousel?.items;

  return (
    <ProductContext.Provider value={{ featured, carousel }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
