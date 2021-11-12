import { Document } from 'mongoose';

export interface Sku extends Document {
    readonly name: string;
    readonly vat: number;
    price: number;
}