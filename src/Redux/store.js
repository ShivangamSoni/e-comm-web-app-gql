import { createStore, combineReducers, compose } from "redux";

import siteReducer from "./Site/reducer";
import cartReducer from "./Cart/reducer";
import { loadState, saveState } from "../Utils/statePersistance";

const persistedState = loadState();

const store = createStore(
  combineReducers({
    site: siteReducer,
    cart: cartReducer,
  }),
  persistedState,
  compose(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f),
);

store.subscribe(() => {
  setInterval(() => {
    saveState(store.getState());
  }, 2000);
});

export default store;
