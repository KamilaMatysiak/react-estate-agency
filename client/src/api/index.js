import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const login = (formData) => API.post('/login', formData);
export const register = (formData) => API.post('/login/register', formData);

export const fetchEstates = () => API.get('/estates');
export const fetchEstate = (id) => API.get(`/estates/${id}`);

export const fetchEmployees = () => API.get('/admin/employees');
export const fetchEmployee = (id) => API.get(`/admin/employee/${id}`);
export const createEmployee = (newEmployee) => API.post('/admin/employees', newEmployee);
export const updateEmployee = (id, updatedEmployee) => API.patch(`/admin/employees/${id}`, updatedEmployee);
export const deleteEmployee = (id) => API.delete(`/admin/employees/${id}`);