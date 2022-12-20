import mongoose, { Schema } from "mongoose";
import EstatesLocalization from "./EstatesLocalization.js"
import EstatesProperties from "./EstatesProperties.js"

const EstateSchema = new Schema({
    id: {type: String},
    name: {type: String},
    price: {type: mongoose.Types.Decimal128},
    status: {type: String},
    employeeId: {type: Schema.Types.ObjectId, ref: 'Employee'},
    estateLocalization: {type:EstatesLocalization.schema, default:{}},
    estateProperties: {type:EstatesProperties.schema, default:{}}
});

const Estate = mongoose.model('Estate', EstateSchema);

export default Estate;