import { createContext, useContext, useState } from "react";
import { find, propEq } from "ramda";
import products from "../../data/products";

const ProductContext = createContext();

export const AppWrapper = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const { featured } = products;
  const carousel = products?.carousel?.items;

  const getByPlaceId = (placeId) => {
    return find(propEq("id", placeId))([...featured, ...carousel]);
  };

  const updateCart = (placeId) => {
    setItemsInCart([placeId, ...itemsInCart]);
  };

  const emptyCart = () => {
    setItemsInCart([]);
  };

  return (
    <ProductContext.Provider
      value={{
        featured,
        carousel,
        getByPlaceId,
        updateCart,
        emptyCart,
        itemsInCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
