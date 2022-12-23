import express from 'express';
import { getTenants, getTenant, createTenant } from '../controlers/tenants.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getTenants);
router.get('/:id', getTenant);
router.post('/', auth, createTenant)

export default router;