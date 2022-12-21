import { combineReducers } from "redux";
import auth from "./auth";
import estates from "./estates";
import employees from "./employees";

export const reducers = combineReducers({ auth, estates, employees });