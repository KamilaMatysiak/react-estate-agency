import mongoose, { mongo } from "mongoose";
import Employee from "../models/Employee.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const getEmployees = async (req, res) => {
    try {
        console.log("Getting employees");

        const employees = await Employee.find().sort({_id: -1})

        console.log(employees);

        res.status(200).json({data: employees});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;

        const employee = await Employee.findById(id);
        console.table(employee);

        res.status(200).json({data: employee});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createEmployee = async (req, res) => {
    console.log('create employee')
    const employee = req.body;
    console.log("req.body:", employee);
    const hash = await bcrypt.hash(employee.password, 12);
    const newEmployee = new Employee({...employee, password: hash});
    console.log("new:", newEmployee)
    try {
        await newEmployee.save();
        res.status(200).json(newEmployee);
    } catch(error) {
        res.status(404).json({message: error.message1})
    }
}

export const updateEmployee = async (req, res) => {
    const {_id} = req.params;
    const employee = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message: "No employee to update"});
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(_id, {...employee, _id}, {new: true});
    res.json(updatedEmployee);
}