import express from 'express';
import { getOffers, createOffer } from '../controlers/offers.js';

const router = express.Router();

router.get('/', getOffers);
router.post('/', createOffer);

export default router;