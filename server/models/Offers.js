import mongoose, { Schema } from "mongoose";

const OfferSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true},
    message: {type: String, required: true},
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

const Offer = mongoose.model('Offer', OfferSchema);

export default Offer;