import mongoose, { Schema } from "mongoose";

const EstatePropertiesSchema = new Schema({
    bedrooms: {type: Number, min: 1},
    bathrooms: {type: Number, min: 1},
    kitchen: {type: Number, min: 1},
    builtInWardrobes: {type: Number},
    parkingSpaces: {type: Number},
    constructionYear: {type: Date},
    garden: {type: Boolean},
    garage: {type: Boolean},
    pool: {type: Boolean},
    airConditioning: {type: Boolean},
    electricShutters: {type: Boolean},
    underfloorHeating: {type: Boolean},
    description: {type: String},
    gallery: {type:String},
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

export default EstatePropertiesSchema;