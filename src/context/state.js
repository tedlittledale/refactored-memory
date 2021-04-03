import { createContext, useContext } from "react";
import { find, propEq } from "ramda";
import products from "../../data/products";

const ProductContext = createContext();

export const AppWrapper = ({ children }) => {
  const { featured } = products;
  const carousel = products?.carousel?.items;

  const getByPlaceId = (placeId) => {
    return find(propEq("id", placeId))([...featured, ...carousel]);
  };

  return (
    <ProductContext.Provider value={{ featured, carousel, getByPlaceId }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
