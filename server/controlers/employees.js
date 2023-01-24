import mongoose, { mongo } from "mongoose";
import Employee from "../models/Employee.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getEmployees = async (req, res) => {
    const {page} = req.query;

    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT;
        
        const total = await Employee.countDocuments({});
        const employees = await Employee.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        res.status(200).json({data: employees, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().sort({_id: -1});
        res.status(200).json({ data: employees});
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getEmployeesBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    
    try {
        const name = new RegExp(searchQuery, 'i');
        const employees = await Employee.find({name})

        res.json({data: employees});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;

        const employee = await Employee.findById(id);
        res.status(200).json({data: employee});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEmployee = async (req, res) => {
    console.log('create employee')
    const employee = req.body;
    const hash = await bcrypt.hash(employee.password, 12);
    const newEmployee = new Employee({...employee, password: hash});
    try {
        await newEmployee.save();
        res.status(200).json(newEmployee);
    } catch(error) {
        res.status(404).json({message: error.message1})
    }
}

export const updateEmployee = async (req, res) => {
    const {id} = req.params;
    const employee = req.body;
    const hash = await bcrypt.hash(employee.password, 12);

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "No employee to update"});
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, {...employee, id, password: hash}, {new: true});
    res.json(updatedEmployee);
}

export const deleteEmployee = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "No employee to delete"});
    }

    await Employee.findByIdAndDelete(id);
    res.json({message: 'Employee deleted'});
}