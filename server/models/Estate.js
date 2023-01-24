import mongoose, { Schema } from "mongoose";
import EstatesLocalizationSchema from "./EstatesLocalization.js"
import EstatesPropertiesSchema from "./EstatesProperties.js"

const EstateSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, min: 1, required: true},
    type: {type: String},// enum: ['House', 'Apartment'], required: true},
    status: {type: String},
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    estateLocalization: {type:EstatesLocalizationSchema, default:{}},
    estateProperties: {type:EstatesPropertiesSchema, default:{}}
});

const Estate = mongoose.model('Estate', EstateSchema);

export default Estate;
