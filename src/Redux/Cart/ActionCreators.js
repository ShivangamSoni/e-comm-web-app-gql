import CART_ACTIONS from "./ActionTypes";

export const addProduct = (id, attributes, quantity = 1) => {
  const product = { productId: id, attributes, quantity };

  return { type: CART_ACTIONS.ADD_PRODUCT, payload: product };
};

export const updateQuantity = (id, sign) => {
  return { type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, sign } };
};

export const removeProduct = (id) => {
  return { type: CART_ACTIONS.REMOVE_PRODUCT, payload: id };
};

export const updateAttributes = (id, attributes) => {
  return { type: CART_ACTIONS.UPDATE_ATTRIBUTES, payload: { id, attributes } };
};
