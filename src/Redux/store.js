import { createStore, combineReducers, compose } from "redux";

import siteReducer from "./Site/reducer";
import cartReducer from "./Cart/reducer";

const store = createStore(
  combineReducers({
    site: siteReducer,
    cart: cartReducer,
  }),
  compose(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f),
);

export default store;
