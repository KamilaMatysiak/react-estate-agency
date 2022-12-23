import { combineReducers } from "redux";
import auth from "./auth";
import estates from "./estates";
import employees from "./employees";
import tenants from "./tenants";

export const reducers = combineReducers({ auth, estates, employees, tenants });