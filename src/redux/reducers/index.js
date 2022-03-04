import * as types from "../action-types";

const initialState = {
  skills: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SKILL_TYPE: {
      return {
        ...state,
        skills: [...state.skills, { ...action.payload, id: Math.random() }],
      };
    }
    default: {
      return state;
    }
  }
};
