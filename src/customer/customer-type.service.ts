import { InjectModel } from '@nestjs/mongoose';
import { CustomerType } from './interfaces/customer-type.interface';
import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { CustomerTypeSchema } from './schema/customer-type.schema';

@Component()
export class CustomerTypeService {
    constructor(@InjectModel(CustomerTypeSchema) private readonly customerTypeModel: Model<CustomerType>){}

    async find(): Promise<CustomerType[]> {
        return await this.customerTypeModel.find().exec();
    }
}