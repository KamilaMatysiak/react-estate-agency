import mongoose, { Schema } from "mongoose";

const EstateLocalizationSchema = new Schema({
    city: {type: String},
    street: {type: String},
    number: {type: Number, min: 1},
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

export default EstateLocalizationSchema;