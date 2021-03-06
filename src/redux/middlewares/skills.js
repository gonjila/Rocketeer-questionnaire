/* eslint-disable no-alert */
import { ADD_SKILL_TYPE } from "../action-types";

export const MIDDLE_SKILL = store => next => action => {
  if (action.type === ADD_SKILL_TYPE) {
    const includeSkill = store
      .getState()
      .skills.findIndex(skillObject => skillObject.id === action.payload.id);

    if (action.payload.id == 0) {
      alert("Choose skill");
    } else if (includeSkill === -1) {
      next(action);
    } else {
      alert("This skill has already been added");
    }
  } else {
    next(action);
  }
};
