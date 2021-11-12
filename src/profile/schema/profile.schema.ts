import * as mongoose from 'mongoose';
import { AddressSchema } from '../../shared/schema/address.model';

export const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    kbo: { type: String, required: true },
    phone: { type: String, required: true },
    iban: { type: String, required: true },
    address: AddressSchema
}, { collection: 'Profile', timestamps:{} });