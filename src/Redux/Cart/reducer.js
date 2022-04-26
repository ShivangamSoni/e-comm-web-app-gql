import CART_ACTIONS from "./ActionTypes";

const cartReducer = (state = { count: 0, items: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.ADD_PRODUCT: {
      const index = state.items.findIndex((cartItem) => cartItem.id === payload.id);
      state.count++;

      if (index !== -1) {
        state.items[index].quantity++;
        return { ...state };
      }

      return { ...state, items: [...state.items, payload] };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
