import { InvoiceLineSchema } from "./invoice-line.Schema";
import { Schema } from "mongoose";
import { InvoiceStateSchema } from "./invoice-state.schema";
import { CustomerSchema } from "../../customer/schema/customer.schema";

export const InvoiceSchema = new Schema({
    customer: CustomerSchema,
    number: { type: Number, required: false },
    state: InvoiceStateSchema,
    invoiceDate: { type: Date, required: true },
    total: { type: Number, required: true },
    totalInc: { type: Number, required: true },
    totalVat: { type: Number, required: true },
    lines: [InvoiceLineSchema]
}, { collection: 'Invoice', timestamps: {} });

InvoiceSchema.pre('save', async function () {
    var invoice = this;
    const invoiceYear = this.invoiceDate.getFullYear();
    const lowerbound = invoiceYear * 10000;
    const upperbound = (invoiceYear + 1) * 10000;
    var latestInvoice = await this.constructor.findOne({ number: { $gt: lowerbound, $lt: upperbound } })
        .sort({ createdAt: -1 })
        .exec();
    invoice.number = latestInvoice ? latestInvoice.number + 1 : lowerbound + 1;
});