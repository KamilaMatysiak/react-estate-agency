import express from 'express';
import { getOffers, getOffersBySearch, createOffer } from '../controlers/offers.js';

const router = express.Router();

router.get('/', getOffers);
router.get('/search', getOffersBySearch);
router.post('/', createOffer);

export default router;