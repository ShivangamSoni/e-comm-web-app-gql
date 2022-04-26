import SITE_ACTIONS from "./ActionTypes";

export const setCurrency = (symbol) => {
  return { type: SITE_ACTIONS.SET_CURRENCY, payload: symbol };
};
