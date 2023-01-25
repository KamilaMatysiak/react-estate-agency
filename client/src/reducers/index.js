import { combineReducers } from "redux";
import auth from "./auth";
import objects from "./objects";
import estates from "./estates";

export const reducers = combineReducers({ auth, objects, estates });