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

export const fetchTenants = () => API.get('/admin/tenants');
export const fetchTenant = (id) => API.get(`/admin/tenant/${id}`);
export const createTenant = (newTenant) => API.post('/admin/tenants', newTenant);
export const updateTenant = (id, updatedTenant) => API.patch(`/admin/tenants/${id}`, updatedTenant);
export const deleteTenant = (id) => API.delete(`/admin/tenants/${id}`);

export const fetchOffers = () => API.get('/admin/offers');
export const createOffer = (newOffer) => API.post('/admin/offers', newOffer);