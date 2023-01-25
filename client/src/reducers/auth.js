import {AUTH, AUTH_FAIL, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null, error: null}, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data, error: null};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null, error: null};
        case AUTH_FAIL:
            return {...state, authData: null, error: action?.error};
        default:
            return state;
    }
}

export default authReducer;