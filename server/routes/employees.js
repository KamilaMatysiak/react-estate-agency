import express from 'express';
import { getEmployees, getEmployee, createEmployee } from '../controlers/employees.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', auth, createEmployee)

export default router;