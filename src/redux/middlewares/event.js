/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { ADD_EVENT_TYPE } from "../action-types";

export const MIDDLE_EVENT = () => next => action => {
  if (action.type === ADD_EVENT_TYPE) {
    if (action.payload.devtalk_topic === "") {
      action.payload.devtalk_topic = "No information";
    }

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
