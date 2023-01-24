import express from 'express';
import { getEstates, getEstate, createEstates, updateEstate, deleteEstate, getEstatesBySearch, getAllEstates } from '../controlers/estates.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getEstates);
router.get('/all', getAllEstates);
router.get('/search', getEstatesBySearch);
router.get('/:id', getEstate);
router.post('/', auth, createEstates);
router.patch('/:id', auth, updateEstate);
router.delete('/:id', auth, deleteEstate);

export default router;