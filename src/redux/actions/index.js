import * as types from "../action-types";

export const ADD_IDENTITY = data => ({
  type: types.ADD_IDENTITY_TYPE,
  payload: data,
});

export const ADD_SKILL = data => ({
  type: types.ADD_SKILL_TYPE,
  payload: data,
});

export const DELETE_SKILL = skillId => ({
  type: types.DELETE_SKILL_TYPE,
  payload: skillId,
});

export const ADD_COVID = data => ({
  type: types.ADD_COVID_TYPE,
  payload: data,
});

export const ADD_EVENT = data => ({
  type: types.ADD_EVENT_TYPE,
  payload: data,
});
