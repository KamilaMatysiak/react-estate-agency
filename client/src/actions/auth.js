import * as api from '../api';

export const login = (formData, navigate) => async(dispatch) => {
    try {
        const {data} = await api.login(formData);
        dispatch({type: 'AUTH', data});
        window.location.reload(false);
        //navigate('/admin');
    } catch(error) {
        console.log(error);
    }
}

export const register = (formData, navigate) => async(dispatch) => {
    try {
        const {data} = await api.register(formData);
        console.log(data);
        dispatch({type: 'AUTH', data});
        navigate('/login');
    } catch (error) {
        console.log(error);
    }
}