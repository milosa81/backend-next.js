import { Document } from 'mongoose';
import { Customer } from '../../customer/interfaces/customer.interface';
import { InvoiceState } from './invoice-state.interface';
import { InvoiceLine } from './invoice-line.interface';

export interface Invoice extends Document {
    readonly customer: Customer;
    readonly number: number;
    readonly state: InvoiceState;
    readonly invoiceDate: Date;
    readonly total: number;
    readonly totalInc: number;
    readonly totalVat: number;
    readonly lines: InvoiceLine[];
}