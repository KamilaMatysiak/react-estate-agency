import mongoose from "mongoose";
import Estate from "../models/Estate.js";
import EstateLocalization from "../models/EstatesLocalization.js";
import EstateProperties from "../models/EstatesProperties.js";


export const getEstates = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT;

        const total = await Estate.countDocuments({});
        const estates = await Estate.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
        console.log(Number(page), Math.ceil(total/LIMIT));
        res.status(200).json({ data: estates, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getAllEstates = async (req, res) => {
    try {
        const estates = await Estate.find().sort({_id: -1});
        res.status(200).json({ data: estates});
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFilteredEstates = async (req, res) => {
    const {localization, type, status, budget} = req.query;
    try {
        const loc = new RegExp(localization, 'i');
        const options = {}


        if (budget != 'none')
            options["price"] = {$lte: budget}

        if (type && type != 'none')
            options["type"] = type
        
        if (status && status != 'none')
            options["status"] = status

        var estates = await Estate.find(options).exec();
 

        if (localization != 'none') {
            estates = estates.filter(estate => loc.test(estate.estateLocalization.city))
        }

        res.json({data: estates});
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message})
    }
}


export const getEstatesBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    
    try {
        const name = new RegExp(searchQuery, 'i');
        const estates = await Estate.find({name})

        res.json({data: estates});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getEstate = async (req, res) => {
    try {
        const { id } = req.params;

        const estate = await Estate.findById(id)

        res.status(200).json({ data: estate });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

function extractFeatures(features) {
    const better_features = {garden: false, garage: false, pool: false, airConditioning: false, electricShutters: false, underfloorHeating: false}
    if (features) features.forEach(value => { 
        better_features[value.name] = true
    });
    return better_features;
}
export const createEstates = async (req, res) => {
    const estate = req.body;
    const newEstate = new Estate({ ...estate});
    try {
        await newEstate.save();
        res.status(200).json(newEstate);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const updateEstate = async (req, res) => {
    const { id } = req.params;
    const estateData = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Estate not found")
        return res.status(404).json({ message: "No estate to update" });
    }

    let estate = await Estate.findByIdAndUpdate(id, {...estateData, id}, {new: true});
    try {
        res.json(estate);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

export const deleteEstate = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Estate not found")
        return res.status(404).json({message: "No estate to delete"});
    }

    await Estate.findByIdAndDelete(id);
    res.json({message: 'Estate deleted'});
}