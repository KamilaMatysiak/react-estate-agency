import * as api from '../api';
import { FETCH_ALL, FETCH_ESTATE, CREATE } from '../constants/actionTypes';

export const getEstates = () => async(dispatch) => {
    try {
        console.log("Initiating: getEstates");
        const {data} = await api.fetchEstates();
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const createEstate = (estate) => async (dispatch) => {
    try {
        const { data } = await api.createEstate(estate);
        dispatch({type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}