import { useMemo } from "react";
import { types, applySnapshot, getSnapshot } from "mobx-state-tree";
import { ProductsModel } from "./src/models/ProductsModel";

let store;

const Store = types.model({
  productsModel: ProductsModel
});

export function initializeStore(snapshot = null, featured = [], carousel = []) {
  const _store =
    store ?? Store.create({ productsModel: { featured, carousel } });
  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    console.log({
      _store: getSnapshot(_store),
      snapshot: JSON.stringify(snapshot)
    });
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;
  return store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
