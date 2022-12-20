import { FETCH_ALL, FETCH_ESTATE } from "../constants/actionTypes";

export default (state={estates: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, estates: action.payload.data};
        case FETCH_ESTATE:
            return{...state, estate: action.payload};
        default:
            return state;
    }
}