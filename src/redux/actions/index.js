import * as types from "../action-types";

export const ADD_SKILL = data => ({
  type: types.ADD_SKILL_TYPE,
  payload: data,
});

export const DELETE_SKILL = skillId => ({
  type: types.DELETE_SKILL_TYPE,
  payload: skillId,
});
