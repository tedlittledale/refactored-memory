import { types } from "mobx-state-tree";

const ProductModel = types.model("ProductModel", {
  id: types.string,
  title: types.string,
  body: types.maybeNull(types.string),
  guidedTour: false,
  media: types.maybeNull(types.frozen()),
  price: types.maybeNull(types.frozen())
});

export const ProductsModel = types
  .model("ProductsModel", {
    featured: types.array(types.frozen()),
    carousel: types.array(types.frozen())
  })
  .actions((self) => ({
    processData(data) {},

    afterCreate() {}
  }))
  .views((self) => {
    return {
      getNodeById: (id) => {
        return id;
      }
    };
  });
