import mongoose from "mongoose";
import Tenant from "../models/Tenants.js";

export const getTenants = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await Tenant.countDocuments({});

        const tenants = await Tenant.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        console.log(tenants);

        res.status(200).json({data: tenants, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTenantsBySearch = async (req, res) => {
    console.log("by search")
    const {searchQuery} = req.query;
    console.log(searchQuery);
    
    try {
        const name = new RegExp(searchQuery, 'i');
        console.log("title:", name)
        const tenants = await Tenant.find({name})
        console.log(tenants);

        res.json({data: tenants});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createTenant = async (req, res) => {
    console.log('create tenant')
    const tenant = req.body;
    const newTenant = new Tenant({...tenant});
    try {
        await newTenant.save();
        res.status(200).json(newTenant);
    } catch(error) {
        res.status(404).json({message: error.message1})
    }
}

export const updateTenant = async (req, res) => {
    const {_id} = req.params;
    const tenant = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message: "No tenant to update"});
    }

    const updatedTenant = await Tenant.findByIdAndUpdate(_id, {...tenant, _id}, {new: true});
    res.json(updatedTenant);
}