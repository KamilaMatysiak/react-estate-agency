import mongoose, { Schema } from "mongoose";

const EstateSchema = new Schema({
    id: {type: String},
    name: {type: String},
    price: {type: Double},
    status: {type: String},
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
});

const Estate = mongoose.model('Estate', EstateSchema);

export default Estate;