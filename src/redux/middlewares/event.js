/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import * as types from "../action-types";

export const MIDDLE_EVENT = () => next => action => {
  if (action.type === types.ADD_EVENT_TYPE) {
    switch (action.payload.will_organize_devtalk) {
      case "true": {
        action.payload.will_organize_devtalk = true;
        break;
      }
      case "false": {
        action.payload.will_organize_devtalk = false;
        break;
      }
      default: {
        return action.payload.will_organize_devtalk;
      }
    }

    next(action);
  } else {
    next(action);
  }
};
