import { Document } from 'mongoose';

export interface InvoiceState extends Document {
    readonly _id: string;
    readonly name: string;
}