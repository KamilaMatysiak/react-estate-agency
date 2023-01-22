import * as api from '../api';
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

export const getEmployees = (page) => async(dispatch) => {
    try {
        console.log("Initiating: getEmployees");
        const {data} = await api.fetchEmployees(page);
        dispatch({type: FETCH_ALL, payload: data});    
    } catch(error) {
        console.log(error);
    }
}

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee);
        dispatch({type: CREATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const getEmployeesBySearch = (searchQuery) => async(dispatch) => {
    try {
        const {data: {data}} = await api.fetchEmployeesBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data}); 
    }
    catch(error) {
        console.log(error);
    }
}

export const updateEmployee = (id, employee) => async (dispatch) => {
    try {
        const { data } = await api.updateEmployee(id, employee);

        dispatch({type: UPDATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await api.deleteEmployee(id);
        dispatch({type: DELETE, payload: id})
    } catch(error) {
        console.log(error)
    }
}