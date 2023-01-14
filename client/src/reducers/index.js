import { combineReducers } from "redux";
import auth from "./auth";
import estates from "./estates";
import objects from "./objects";

export const reducers = combineReducers({ auth, estates, objects });