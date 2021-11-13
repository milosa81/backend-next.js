import { Schema } from "mongoose";

export const InvoiceStateSchema = new Schema({
    name: { type: String, required: true }
}, { collection: 'InvoiceState', timestamps:{} });