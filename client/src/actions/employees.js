import * as api from '../api';
import { FETCH_ALL, FETCH_EMPLOYEE, CREATE } from '../constants/actionTypes';

export const getEmployees = () => async(dispatch) => {
    try {
        console.log("Initiating: getEmployees");
        const {data} = await api.fetchEmployees();
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