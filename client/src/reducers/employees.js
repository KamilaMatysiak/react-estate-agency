import { CREATE, FETCH_ALL, FETCH_EMPLOYEE } from "../constants/actionTypes";

export default (state={employees: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, employees: action.payload.data};
        case FETCH_EMPLOYEE:
            return{...state, employee: action.payload};
        case CREATE:
            return {...state, employees: [...state.employees, action.payload]};
        default:
            return state;
    }
}