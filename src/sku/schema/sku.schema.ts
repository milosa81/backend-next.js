import * as mongoose from 'mongoose';

export const SkuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vat: { type: Number, required: true },
    price: { type: Number, required: true }
},{ collection: 'Sku', timestamps:{} });