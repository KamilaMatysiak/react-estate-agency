import { FETCH_ESTATES, FETCH_ALL_ESTATES, FETCH_ESTATE, FETCH_ESTATES_BY_SEARCH, CREATE, UPDATE, DELETE, FETCH_FILTERED_ESTATES } from "../constants/actionTypes";

export default (state={estates: []}, action) => {
    switch(action.type){
        case FETCH_ESTATES:
            return{...state, estates: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages};
        case FETCH_ALL_ESTATES:
            return{...state, estates: action.payload.data};
        case FETCH_ESTATE:
            return{...state, estate: action.payload};
        case FETCH_FILTERED_ESTATES:
            return{...state, filteredEstates: action.payload};
        case FETCH_ESTATES_BY_SEARCH:
            return{...state, estates: action.payload};
        case CREATE:
            return {...state, estates: [...state.estates, action.payload]};
        case UPDATE:
            return {...state, estates: state.objects.map((estate) => (estate._id === action.payload._id ? action.payload : estate ))};
        case DELETE:
            return {...state, estates: state.objects.filter((estate) => estate.id !== action.payload)}
        default:
            return state;
    }
    
}