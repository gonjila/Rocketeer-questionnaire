import axios from "axios";

import * as types from "../action-types";

const initialState = {
  identity: {},
  skills: [],
  covid: {},
  event: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_IDENTITY_TYPE: {
      return { ...state, identity: action.payload };
    }
    case types.ADD_SKILL_TYPE: {
      return {
        ...state,
        skills: [...state.skills, { id: Math.random(), ...action.payload }],
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
    case types.ADD_COVID_TYPE: {
      return { ...state, covid: action.payload };
    }
    case types.ADD_EVENT_TYPE: {
      return { ...state, event: action.payload };
    }
    case types.UPLOAD_DATA_TYPE: {
      axios
        .post(
          `https://bootcamp-2022.devtest.ge/api/application`,
          {
            token: process.env.REACT_APP_MY_API_TOKEN,
            ...state.identity,
            skills: state.skills,
            ...state.covid,
            ...state.event,
          },
          { headers: { "content-type": "application/json" } }
        )
        .then(res => console.log("server response", res));

      return {
        identity: {},
        skills: [],
        covid: {},
        event: {},
      };
    }
    default: {
      return state;
    }
  }
};
