import { combineReducers } from "redux";
import auth from "./auth";
import estates from "./estates";

export const reducers = combineReducers({ auth, estates });