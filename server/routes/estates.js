import express from 'express';
import { getEstates, getEstate } from '../controlers/estates.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEstates);
router.get('/:id', getEstate);

export default router;