import * as api from '../api';
import { FETCH_ALL, CREATE, FETCH_BY_SEARCH } from '../constants/actionTypes';

export const getTenants = (page) => async(dispatch) => {
    try {
        const {data} = await api.fetchTenants(page);
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const createTenant = (tenant) => async (dispatch) => {
    try {
        const { data } = await api.createTenant(tenant);
        dispatch({type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const getTenantsBySearch = (searchQuery) => async(dispatch) => {
    try {
        const {data: {data}} = await api.fetchTenantsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data}); 
    }
    catch(error) {
        console.log(error);
    }
}