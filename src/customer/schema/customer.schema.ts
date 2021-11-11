import * as mongoose from 'mongoose';
import { CustomerTypeSchema } from './customer-type.schema';
import { ContactSchema } from './contact.schema';
import { AddressSchema } from '../../shared/schema/address.model';

export const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    kbo: { type: String, required: true },
    type: CustomerTypeSchema,
    address: AddressSchema,
    contacts: [ContactSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { collection: 'Customer' });