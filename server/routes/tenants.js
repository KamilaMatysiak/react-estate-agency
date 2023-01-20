import express from 'express';
import { getTenants, getTenantsBySearch, createTenant, updateTenant, deleteTenant} from '../controlers/tenants.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getTenants);
router.get('/search', getTenantsBySearch);
router.post('/', auth, createTenant);
router.patch('/:id', auth, updateTenant);
router.delete('/:id', auth, deleteTenant);

export default router;