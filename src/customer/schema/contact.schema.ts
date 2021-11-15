import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    info: { type: String, required: false }
},{ _id : false });