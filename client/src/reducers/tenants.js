import { FETCH_ALL, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (state={tenants: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, tenants: action.payload.data};
        case FETCH_BY_SEARCH:
            return{...state, tenants: action.payload};
        default:
            return state;
    }
}