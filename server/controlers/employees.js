import mongoose, { mongo } from "mongoose";
import Employee from "../models/Employee";

export const getEmployees = async (req, res) => {
    try {
        console.log("Getting employees");

        const employees = await Employee.find().sort({_id: -1})

        console.table(employees);

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
    const employee = req.body;
    const newEmployee = new Employee({...employee});
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
    res.json(updateEmployee);
}