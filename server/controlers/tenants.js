import mongoose from "mongoose";
import Tenant from "../models/Tenants.js";

export const getTenants = async (req, res) => {
    try {
        console.log("Getting tenants");

        const tenants = await Tenant.find().sort({_id: -1})

        console.log(tenants);

        res.status(200).json({data: tenants});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTenant = async (req, res) => {
    try {
        const {id} = req.params;

        const tenant = await Tenant.findById(id);
        console.table(tenant);

        res.status(200).json({data: tenant});
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