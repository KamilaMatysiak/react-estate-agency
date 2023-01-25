import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_OBJECT, FETCH_BY_SEARCH, FETCH_ALL_OBJECTS } from "../constants/actionTypes";

export default (state={objects: []}, action) => {
    switch(action.type){
        case FETCH_ALL:
            return{...state, objects: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages};
        case FETCH_OBJECT:
            return{...state, object: action.payload};
        case FETCH_ALL_OBJECTS:
            return{...state, objects: action.payload.data};
        case FETCH_BY_SEARCH:
            return{...state, objects: action.payload};
        case CREATE:
            return {...state, objects: [...state.objects, action.payload]};
        case UPDATE:
            return {...state, objects: state.objects.map((object) => (object._id === action.payload._id ? action.payload : object ))};
        case DELETE:
            return {...state, objects: state.objects.filter((object) => object.id !== action.payload)}
        default:
            return state;
    }
    
}