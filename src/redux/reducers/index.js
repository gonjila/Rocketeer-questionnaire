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
    case types.DELETE_SKILL_TYPE: {
      const skillIndex = state.skills.findIndex(
        skill => skill.id === action.payload
      );

      state.skills.splice(skillIndex, 1);

      return {
        ...state,
        skills: [...state.skills],
      };
    }
    default: {
      return state;
    }
  }
};
