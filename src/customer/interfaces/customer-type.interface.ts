import { Document } from 'mongoose';

export interface CustomerType extends Document {
    readonly name: string;
}