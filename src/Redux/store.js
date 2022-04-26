import { createStore, combineReducers, compose } from "redux";

import siteReducer from "./Site/reducer";

const store = createStore(
  combineReducers({
    site: siteReducer,
  }),
  compose(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f),
);

export default store;
