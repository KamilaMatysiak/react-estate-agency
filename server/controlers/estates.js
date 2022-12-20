import mongoose from "mongoose";
import Estate from "../models/Estate.js";
import EstateLocalization from "../models/EstatesLocalization.js";
import EstateProperties from "../models/EstatesProperties.js";

export const getEstates = async (req, res) => {
    try {
        console.log("Getting estates");

        const estates = await Estate.find().sort({_id: -1})
        const estatesProps = await EstateProperties.find().sort({_id: -1})
        const estatesLoc = await EstateLocalization.find().sort({_id: -1})

        console.log(estates)
        console.table(estates);
        console.table(estatesProps);
        console.table(estatesLoc);
        
        res.status(200).json({data: estates});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getEstate = async (req, res) => {
    try {
        const {id} = req.params;

        const estate = await Estate.findById(id)
        const estateProps = await EstateProperties.findById(id)
        const estateLoc = await EstateLocalization.findById(id)
        console.table(estate);
        console.table(estateProps);
        console.table(estateLoc);
        
        res.status(200).json({data: estate});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}