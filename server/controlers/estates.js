import mongoose from "mongoose";
import Estate from "../models/Estate.js";
import EstateLocalization from "../models/EstatesLocalization.js";
import EstateProperties from "../models/EstatesProperties.js";


export const getEstates = async (req, res) => {
    try {
        console.log("Getting estates");

        const estates = await Estate.find().sort({ _id: -1 })

        console.log(estates)
        console.table(estates);

        res.status(200).json({ data: estates });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getEstate = async (req, res) => {
    try {
        const { id } = req.params;

        const estate = await Estate.findById(id)
        console.table(estate);

        res.status(200).json({ data: estate });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createEstates = async (req, res) => {
    console.log('create estates')
    console.log(req.body)
    const estate = {...req.body, bathrooms:4, city:"Poznan", bedrooms:1} ;

    const newEstate = new Estate({ ...estate, estateProperties:{...estate}, estateLocalization:{...estate}});
    console.log('create estates 4')
    console.log(newEstate)
    try {
        await newEstate.save();
        res.status(200).json(newEstate);
    } catch (error) {
        res.status(404).json({ message: error.message1 })
    }
}

export const updateEstate = async (req, res) => {
    const { _id } = req.params;
    const estateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message: "No estate to update" });
    }

    let estate = await Estate.findById(_id);
    //, { ...estate, _id, estateLocalization: } { new: true }
    updatedEstate.estateLocalization = {...updatedEstate.estateLocalization, estateData}
    updatedEstate.estateProperties = {...updatedEstate.estateProperties, estateData}
    try {
        await estate.update(...estateData).save()
        res.json(estate);
    } catch (error) {
        res.status(404).json({ message: error.message1 })
    }
}