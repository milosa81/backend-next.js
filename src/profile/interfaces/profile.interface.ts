import { Address } from "../../shared/interfaces/address.interface";
import { Document } from 'mongoose';

export interface Profile extends Document {
    readonly name: string;
    readonly kbo: string;
    readonly phone: string;
    readonly iban: string;
    address: Address;
}