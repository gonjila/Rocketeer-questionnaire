/* eslint-disable no-alert */
/* eslint-disable no-console */
import { ADD_SKILL_TYPE, DELETE_SKILL_TYPE } from "../action-types";

// TODO თუ skill იქნება skill მაშინ არ დაამატოს
export const MIDDLE_SKILL = store => next => action => {
  if (action.type === ADD_SKILL_TYPE) {
    const includeSkill = store
      .getState()
      .skills.findIndex(
        skillObject => skillObject.skill === action.payload.skill
      );

    if (includeSkill === -1) {
      next(action);
    } else {
      alert("This skill has already been added");
    }
  }

  if (action.type === DELETE_SKILL_TYPE) {
    next(action);
  }
};

export const MIDDLE_LOGGER = store => next => action => {
  console.group("skills");
  console.log("store", store.getState());
  console.log("payload", action.payload);
  next(action);
  console.log("store", store.getState());
  console.groupEnd();
};
