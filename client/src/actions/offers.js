import * as api from '../api';
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE} from '../constants/actionTypes';

export const getOffers = (page) => async(dispatch) => {
    try {
        const {data} = await api.fetchOffers(page);
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const createOffer = (offer) => async (dispatch) => {
    try {
        const { data } = await api.createOffer(offer);
        dispatch({type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const getOffersBySearch = (searchQuery) => async(dispatch) => {
    try {
        const {data: {data}} = await api.fetchOffersBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data}); 
    }
    catch(error) {
        console.log(error);
    }
}

export const deleteOffer = (id) => async (dispatch) => {
    try {
        await api.deleteOffer(id);
        dispatch({type: DELETE, payload: id})
    } catch(error) {
        console.log(error)
    }
}