import CART_ACTIONS from "./ActionTypes";
import shallowEquals from "../../Utils/shallowEquals";

import { v4 as uuid } from "uuid";

const cartReducer = (state = { count: 0, items: [], tax: 15 }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.ADD_PRODUCT: {
      // Creating a Deep Copy of Payload because it's value: "Quantity" is editable based on attributes
      // Hence having a common pointer to objects can create problems
      const product = JSON.parse(JSON.stringify(payload));

      const index = state.items.findIndex((item) => {
        if (item.productId === product.productId && shallowEquals(item.attributes, product.attributes)) {
          return true;
        }
        return false;
      });

      state.count++;

      if (index !== -1) {
        state.items[index].quantity++;
        return { ...state };
      }

      product.id = uuid();

      return { ...state, items: [...state.items, product] };
    }
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, sign } = payload;

      const index = state.items.findIndex((item) => item.id === id);

      if (index === -1) {
        return state;
      }

      if (sign === "+") {
        state.items[index].quantity++;
        state.count++;
      } else if (sign === "-") {
        state.items[index].quantity--;
        state.count--;
      }

      if (state.items[index].quantity <= 0) {
        state.items.splice(index, 1);
      }

      return { ...state };
    }
    case CART_ACTIONS.UPDATE_ATTRIBUTES: {
      const { id, attributes } = payload;

      const index = state.items.findIndex((item) => item.id === id);

      if (index === -1) {
        return state;
      }

      const { productId } = state.items[index];

      // If an Item with same productId & attributes already exist
      const matchedIndex = state.items.findIndex((item) => item.productId === productId && shallowEquals(item.attributes, attributes));

      if (matchedIndex === -1) {
        state.items[index].attributes = attributes;
        return { ...state };
      } else {
        const qty = state.items[index].quantity;
        state.items[matchedIndex].quantity += qty;
        state.items.splice(index, 1);

        return { ...state };
      }
    }
    case CART_ACTIONS.REMOVE_PRODUCT: {
      const index = state.items.findIndex((item) => item.id === payload);

      if (index === -1) {
        return state;
      }

      state.count = state.count - state.items[index].quantity;
      state.items.splice(index, 1);

      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
