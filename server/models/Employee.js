import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new Schema({
    id: {type: String},
    username: {type: String, required: true},
    name: {type: String},
    email: {type: String},
    password: {type: String, required: true},
    phoneNumber: {type: String},
    role: {type: String},
    avatar: {type: String}
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;