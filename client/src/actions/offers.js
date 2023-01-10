import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export const getOffer = () => async(dispatch) => {
    try {
        console.log("Initiating: getOffers");
        const {data} = await api.fetchOffers();
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const createOffer= (offer) => async (dispatch) => {
    try {
        const { data } = await api.createOffer(offer);
        dispatch({type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}