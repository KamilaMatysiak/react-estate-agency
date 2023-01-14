import express from 'express';
import { getTenants, getTenantsBySearch, createTenant } from '../controlers/tenants.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getTenants);
router.get('/search', getTenantsBySearch);
router.post('/', auth, createTenant)

export default router;