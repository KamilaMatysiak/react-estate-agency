import { FETCH_ALL, FETCH_TENANT } from "../constants/actionTypes";

export default (state={tenants: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, tenants: action.payload.data};
        case FETCH_TENANT:
            return{...state, tenant: action.payload};
        default:
            return state;
    }
}