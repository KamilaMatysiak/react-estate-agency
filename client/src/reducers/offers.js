import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (state={offers: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, offers: action.payload.data};
        case CREATE:
            return {...state, tenants: [...state.tenants, action.payload]};
        default:
            return state;
    }
}