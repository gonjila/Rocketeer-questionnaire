import { createStore, applyMiddleware } from "redux";

import { reducer } from "./reducers";
import { MIDDLE_SKILL, MIDDLE_LOGGER } from "./middlewares";

const middlewares = [MIDDLE_LOGGER, MIDDLE_SKILL];

export const reduxStore = createStore(reducer, applyMiddleware(...middlewares));
