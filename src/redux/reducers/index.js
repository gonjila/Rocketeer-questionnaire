import * as types from "../action-types";

const initialState = {
  routes: [
    "/",
    "/personal-information",
    "/technlogies",
    "/covid",
    "/about-events",
    "/submitter",
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.asd: {
      return "asd";
    }
    default: {
      return state;
    }
  }
};
