import express from 'express';
import { getEstates, getEstate, createEstates } from '../controlers/estates.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEstates);
router.get('/:id', getEstate);
router.post('/', auth, createEstates);

export default router;