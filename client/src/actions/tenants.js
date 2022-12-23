import * as api from '../api';
import { FETCH_ALL, FETCH_TENANT, CREATE } from '../constants/actionTypes';

export const getTenants = () => async(dispatch) => {
    try {
        console.log("Initiating: getEmployees");
        const {data} = await api.fetchTenants();
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