/* eslint-disable no-console */
export const MIDDLE_LOGGER = store => next => action => {
  console.group("skills");
  console.log("store", store.getState());
  console.log("payload", action.payload);
  next(action);
  console.log("store", store.getState());
  console.groupEnd();
};
