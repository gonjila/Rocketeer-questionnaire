/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { ADD_COVID_TYPE } from "../action-types";

export const MIDDLE_COVID = () => next => action => {
  if (action.type === ADD_COVID_TYPE) {
    if (action.payload.had_covid_at === "") {
      action.payload.had_covid_at = "1980-01-01";
    }
    if (action.payload.vaccinated_at === "") {
      action.payload.vaccinated_at = "1980-01-01";
    }

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
