import { CREATE, FETCH_ALL, FETCH_OBJECT, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (state={objects: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, objects: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages};
        case FETCH_OBJECT:
            return{...state, object: action.payload};
        case FETCH_BY_SEARCH:
            return{...state, objects: action.payload};
        case CREATE:
            return {...state, objects: [...state.objects, action.payload]};
        default:
            return state;
    }
}