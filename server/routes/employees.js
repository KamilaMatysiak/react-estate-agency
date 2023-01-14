import express from 'express';
import { getEmployees, getEmployee, createEmployee, getEmployeesBySearch } from '../controlers/employees.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEmployees);
router.get('/search', getEmployeesBySearch);
router.post('/', auth, createEmployee)

export default router;