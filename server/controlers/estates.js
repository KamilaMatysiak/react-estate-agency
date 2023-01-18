import mongoose from "mongoose";
import Estate from "../models/Estate.js";
import EstateLocalization from "../models/EstatesLocalization.js";
import EstateProperties from "../models/EstatesProperties.js";


export const getEstates = async (req, res) => {
    try {
        console.log("Getting estates");

        const estates = await Estate.find().sort({ _id: -1 })
        const estatesProps = await EstateProperties.find().sort({ _id: -1 })
        const estatesLoc = await EstateLocalization.find().sort({ _id: -1 })

        console.log(estates)
        console.table(estates);
        console.table(estatesProps);
        console.table(estatesLoc);

        res.status(200).json({ data: estates });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getEstate = async (req, res) => {
    try {
        const { id } = req.params;

        const estate = await Estate.findById(id)
        const estateProps = await EstateProperties.findById(id)
        const estateLoc = await EstateLocalization.findById(id)
        console.table(estate);
        console.table(estateProps);
        console.table(estateLoc);

        res.status(200).json({ data: estate });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createEstates = async (req, res) => {
    console.log('create estates')
    const estate = req.body;
    const estateProps = req.body;
    const estateLoc = req.body;
    const newEstate = new Estate({ ...estate, estateProps, estateLoc });
    try {
        await newEstate.save();
        res.status(200).json(newEstate);
    } catch (error) {
        res.status(404).json({ message: error.message1 })
    }
}

export const updateEstate = async (req, res) => {
    const { _id } = req.params;
    const estate = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "No estate to update" });
    }

    const updatedEstate = await Estate.findByIdAndUpdate(_id, { ...estate, _id }, { new: true });
    res.json(updatedEstate);
}