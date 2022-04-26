import SITE_ACTIONS from "./ActionTypes";

const siteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SITE_ACTIONS.SET_CURRENCY: {
      return { ...state, currency: payload };
    }
    default: {
      return {};
    }
  }
};

export default siteReducer;
