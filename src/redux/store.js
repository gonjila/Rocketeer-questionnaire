import { createStore, applyMiddleware } from "redux";

import { reducer } from "./reducers";
import {
  MIDDLE_SKILL,
  MIDDLE_LOGGER,
  MIDDLE_COVID,
  MIDDLE_EVENT,
} from "./middlewares";

const middlewares = [MIDDLE_LOGGER, MIDDLE_SKILL, MIDDLE_COVID, MIDDLE_EVENT];

export const reduxStore = createStore(reducer, applyMiddleware(...middlewares));
