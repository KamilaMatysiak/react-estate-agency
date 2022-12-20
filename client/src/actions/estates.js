import * as api from '../api';
import { FETCH_ALL, FETCH_ESTATE } from '../constants/actionTypes';

export const getEstates = () => async(dispatch) => {
    try {
        console.log("Initiating: getEstates");
        const {data} = await api.fetchEstates();
        console.log("funny debug");
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}