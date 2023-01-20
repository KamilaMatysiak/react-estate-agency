import mongoose, { Schema } from "mongoose";
import EstatesLocalization from "./EstatesLocalization.js"
import EstatesProperties from "./EstatesProperties.js"

const EstateSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, min: 1, required: true},
    type: {type: String, enum: ['House', 'Apartment'], required: true},
    status: {type: String},
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    estateLocalization: {type:EstatesLocalization.schema, default:{}},
    estateProperties: {type:EstatesProperties.schema, default:{}}
});

const Estate = mongoose.model('Estate', EstateSchema);

export default Estate;
