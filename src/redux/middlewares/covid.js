/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import * as types from "../action-types";

export const MIDDLE_COVID = () => next => action => {
  if (action.type === types.ADD_COVID_TYPE) {
    // action.payload.had_covid
    switch (action.payload.had_covid) {
      case "true": {
        action.payload.had_covid = true;
        break;
      }
      case "false": {
        action.payload.had_covid = false;
        break;
      }
      default: {
        return action.payload.had_covid;
      }
    }
    switch (action.payload.vaccinated) {
      case "true": {
        action.payload.vaccinated = true;
        break;
      }
      case "false": {
        action.payload.vaccinated = false;
        break;
      }
      default: {
        return action.payload.vaccinated;
      }
    }

    next(action);
  } else {
    next(action);
  }
};
