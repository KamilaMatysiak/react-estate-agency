import mongoose, { Schema } from "mongoose";

const EstateLocalizationSchema = new Schema({
    id: {type: String},
    city: {type: String},
    street: {type: String},
    number: {type: Number, min: 1},
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

const EstateLocalization = mongoose.model('EstateLocalization', EstateLocalizationSchema);

export default EstateLocalization;