import mongoose, { Schema } from "mongoose";

const TenantSchema = new Schema({
    id: {type: String},
    name: {type: String},
    phoneNumber: {type: String},
    email: {type: String},
    terminationDate: {type: Date},
    estateId: {type: Schema.Types.ObjectId, ref: 'Estate'},
});

const Tenant = mongoose.model('Tenant', TenantSchema);

export default Tenant;