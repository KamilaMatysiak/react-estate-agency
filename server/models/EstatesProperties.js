import mongoose, { Schema } from "mongoose";

const EstatePropertiesSchema = new Schema({
    id: {type: String},
    bedrooms: {type: Number, min: 1},
    bathrooms: {type: Number, min: 1},
    kitchen: {type: Number, min: 1},
    builtInWardrobes: {type: Number},
    parkingSpaces: {type: Number},
    contructionYear: {type: Date},
    garden: {type: Boolean},
    garage: {type: Boolean},
    pool: {type: Boolean},
    airConditioning: {type: Boolean},
    electricShutters: {type: Boolean},
    underfloorHeating: {type: Boolean},
    description: {type: String},
    gallery: [{
        data: Buffer,
        contentType: String,
    }],
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

const EstateProperties = mongoose.model('EstateProperties', EstatePropertiesSchema);

export default EstateProperties;