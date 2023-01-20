import express from 'express';
import { getOffers, getOffersBySearch, createOffer, deleteOffer } from '../controlers/offers.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getOffers);
router.get('/search', getOffersBySearch);
router.post('/', createOffer);
router.delete('/:id', auth, deleteOffer);

export default router;