import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    number: { type: String, required: true },
    bus: { type: String, required: false },
    zip: { type: String, required: true },
    place: { type: String, required: true }
},{ _id : false });