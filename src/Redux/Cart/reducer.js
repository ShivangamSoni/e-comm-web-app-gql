import CART_ACTIONS from "./ActionTypes";
import shallowEquals from "../../Utils/shallowEquals";

const cartReducer = (state = { count: 0, items: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.ADD_PRODUCT: {
      // Creating a Deep Copy of Payload because it's value: "Quantity" is editable based on attributes
      // Hence having a common pointer to objects can create problems
      const product = JSON.parse(JSON.stringify(payload));

      const index = state.items.findIndex((item) => {
        if (item.id === product.id && shallowEquals(item.attributes, product.attributes)) {
          return true;
        }
        return false;
      });

      state.count++;

      if (index !== -1) {
        state.items[index].quantity++;
        return { ...state };
      }

      return { ...state, items: [...state.items, product] };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
