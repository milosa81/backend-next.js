import { SkuSchema } from "../../sku/schema/sku.schema";
import { Schema } from "mongoose";

export const InvoiceLineSchema = new Schema({
    sku: SkuSchema,
    vat: { type: Number, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    total: { type: Number, required: true },
    totalInc: { type: Number, required: true }
},{ _id : false });
