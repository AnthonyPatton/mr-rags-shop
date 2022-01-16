import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    // the type is the key
    type: ActionTypes.SET_PRODUCTS,
    payload: products, //this is equal to products we are getting
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};