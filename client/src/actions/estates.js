import * as api from '../api';
import { FETCH_ESTATES, FETCH_ALL_ESTATES, CREATE, UPDATE, DELETE, FETCH_ESTATE, FETCH_ESTATES_BY_SEARCH, FETCH_FILTERED_ESTATES } from '../constants/actionTypes';

export const getEstates = (page) => async(dispatch) => {
    try {
        const {data} = await api.fetchEstates(page);
        dispatch({type: FETCH_ESTATES, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const getAllEstates = () => async(dispatch) => {
    try {
        const {data} = await api.fetchAllEstates();
        dispatch({type: FETCH_ALL_ESTATES, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const getEstate = (id) => async (dispatch) => {
    try {        
        const {data} = await api.fetchEstate(id);
        dispatch({type: FETCH_ESTATE, payload: data});

    } catch(error) {
        console.log(error);
    }
    
} 

export const getFilteredEstates = (searchQuery, navigate) => async (dispatch) => {
    try {
        if (searchQuery.type) {
            {searchQuery.type.type === "Rent" ? searchQuery.status = "For Rent" : searchQuery.status = "For Sale"}
            searchQuery.type = searchQuery.type.label
        } else {
            searchQuery.status = 'none'
            searchQuery.type = 'none'
        }

        const {data} = await api.fetchFilteredEstates(searchQuery);
        navigate(`/estates/search?localization=${searchQuery.localization || 'none'}&type=${searchQuery.type || 'none'}&status=${searchQuery.status || 'none' }&budget=${searchQuery.budget || 'none'}`, {state: {data: data, query: searchQuery}})
        dispatch({type: FETCH_FILTERED_ESTATES, payload: data});

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

export const getEstatesBySearch = (searchQuery) => async(dispatch) => {
    try {
        const {data: {data}} = await api.fetchEstatesBySearch(searchQuery);
        dispatch({type: FETCH_ESTATES_BY_SEARCH, payload: data}); 
    }
    catch(error) {
        console.log(error);
    }
}

export const updateEstate = (id, estate) => async (dispatch) => {
    try {
        const { data } = await api.updateEstate(id, estate);

        dispatch({type: UPDATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const deleteEstate = (id) => async (dispatch) => {
    try {
        await api.deleteEstate(id);
        dispatch({type: DELETE, payload: id})
    } catch(error) {
        console.log(error)
    }
}