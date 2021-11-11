import * as mongoose from 'mongoose';

export const CustomerTypeSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: 'CustomerType' });