import CART_ACTIONS from "./ActionTypes";

export const addProduct = (id, attributes, quantity = 1) => {
  const product = { id, attributes, quantity };

  return { type: CART_ACTIONS.ADD_PRODUCT, payload: product };
};
