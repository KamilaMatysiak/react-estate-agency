import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Employee from '../models/Employee.js';

dotenv.config();

export const login = async (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);

    try {
        const exsistingEmployee = await Employee.findOne({username});
        if(!exsistingEmployee) return res.status(404).json({message: "User not found!"});

        console.log(exsistingEmployee);
        
        const isPasswordCorrect = await bcrypt.compare(password, exsistingEmployee.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials!"});

        const token = jwt.sign({username: exsistingEmployee.username, id:exsistingEmployee._id}, process.env.JWT_SECRET, {expiresIn: '3h'});
        res.status(200).json({employee: exsistingEmployee, isAdmin: exsistingEmployee.isAdmin, token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};

export const register = async (req, res) => {
    const {username, password} = req.body;

    try {
        const exsistingEmployee = await Employee.findOne({username});
        if(exsistingEmployee) return res.status(400).json({message: "User already exsist!"});
        const hash = await bcrypt.hash(password, 12);
        const result = await Employee.create({username, password: hash})
        const token = jwt.sign({username: result.username, id:result._id}, process.env.JWT_SECRET, {expiresIn: '3h'});
        res.status(200).json({employee: result, token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};

