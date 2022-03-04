import * as types from "../action-types";

const initialState = {
  skills: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SKILL: {
      return "";
    }
    default: {
      return state;
    }
  }
};
