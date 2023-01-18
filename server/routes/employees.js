import express from 'express';
import { getEmployees, getEmployee, createEmployee, getEmployeesBySearch, deleteEmployee, updateEmployee } from '../controlers/employees.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEmployees);
router.get('/search', getEmployeesBySearch);
router.post('/', auth, createEmployee);
router.patch('/:id', auth, updateEmployee);
router.delete('/:id', auth, deleteEmployee);
export default router;