import { combineReducers } from "redux";
import auth from "./auth";
import estates from "./estates";
import employees from "./employees";
import tenants from "./tenants";
import offers from "./offers";

export const reducers = combineReducers({ auth, estates, employees, tenants, offers });