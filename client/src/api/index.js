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

export const fetchEstates = () => API.get('admin/estates');
export const fetchEstate = (id) => API.get(`admin/estates/${id}`);
export const createEstate = (newEstate) => API.post('/admin/estates/', newEstate);
export const updateEstate = (id, updatedEstate) => API.patch(`/admin/estates/${id}`, updatedEstate);
export const deleteEstate = (id) => API.delete(`/admin/estates/${id}`);

export const fetchEmployees = (page) => API.get(`/admin/employees?page=${page}`);
export const fetchEmployeesBySearch = (searchQuery) => API.get(`/admin/employees/search?searchQuery=${searchQuery.search || 'none'}`);
export const fetchEmployee = (id) => API.get(`/admin/employee/${id}`);
export const createEmployee = (newEmployee) => API.post('/admin/employees', newEmployee);
export const updateEmployee = (id, updatedEmployee) => API.patch(`/admin/employees/${id}`, updatedEmployee);
export const deleteEmployee = (id) => API.delete(`/admin/employees/${id}`);

export const fetchTenants = (page) => API.get(`/admin/tenants?page=${page}`);
export const fetchTenantsBySearch = (searchQuery) => API.get(`/admin/tenants/search?searchQuery=${searchQuery.search || 'none'}`);
export const createTenant = (newTenant) => API.post('/admin/tenants', newTenant);
export const updateTenant = (id, updatedTenant) => API.patch(`/admin/tenants/${id}`, updatedTenant);
export const deleteTenant = (id) => API.delete(`/admin/tenants/${id}`);

export const fetchOffers = (page) => API.get(`/admin/offers?page=${page}`);
export const fetchOffersBySearch = (searchQuery) => API.get(`/admin/offers/search?searchQuery=${searchQuery.search || 'none'}`);
export const createOffer = (newOffer) => API.post('/admin/offers', newOffer);