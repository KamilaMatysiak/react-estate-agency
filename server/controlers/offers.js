import mongoose from "mongoose";
import Offer from "../models/Offers.js";
import Estate from "../models/Estate.js";

export const getOffers = async (req, res) => {
    try {
        console.log("Getting offers");

        const offers = await Offer.find().sort({_id: -1})

        console.log(offers);

        res.status(200).json({data: offers});
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