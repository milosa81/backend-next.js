import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InvoiceStateSchema } from './schema/invoice-state.schema';
import { InvoiceState } from './interfaces/invoice-state.interface';

@Component()
export class InvoiceStateService {
    constructor(@InjectModel(InvoiceStateSchema) private readonly invoiceStateModel: Model<InvoiceState>){}

    async find(): Promise<InvoiceState[]> {
        return await this.invoiceStateModel.find().sort('sortOrder').exec();
    }
}