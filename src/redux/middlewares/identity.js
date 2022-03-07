/* eslint-disable no-param-reassign */
import { ADD_IDENTITY_TYPE } from "../action-types";

export const MIDDLE_IDENTITY = () => next => action => {
  if (action.type === ADD_IDENTITY_TYPE) {
    if (action.payload.phone === "") {
      action.payload.phone = "+995 5..";
    }
  }
  next(action);
};
