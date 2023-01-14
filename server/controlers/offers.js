import mongoose from "mongoose";
import Offer from "../models/Offers.js";
import Estate from "../models/Estate.js";

export const getOffers = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await Offer.countDocuments({});

        const offers = await Offer.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        res.status(200).json({data: offers, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getOffersBySearch = async (req, res) => {
    console.log("by search")
    const {searchQuery} = req.query;
    console.log(searchQuery);
    
    try {
        const name = new RegExp(searchQuery, 'i');
        const offers = await Offer.find({name})

        res.json({data: offers});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getOffer = async (req, res) => {
    try {
        const {id} = req.params;

        const offer = await Offer.findById(id);
        console.table(offer);

        res.status(200).json({data: offer});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createOffer = async (req, res) => {
    const offer = req.body;
    var objectId = mongoose.Types.ObjectId(offer.estateId)
    const newOffer = new Offer({...offer, estateId: objectId});
    try {
        await newOffer.save();
        res.status(200).json(newOffer);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}