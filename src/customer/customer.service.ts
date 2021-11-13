import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { Customer } from "./interfaces/customer.interface";
import { CustomerDto } from './dto/customer.dto';
import { CustomerSchema } from './schema/customer.schema';
import { InjectModel } from '@nestjs/mongoose';
import { QueryHelpers } from '../shared/helpers/query-helpers';
import { CustomerSearchParamsDto } from './dto/customer-search-params.dto';
import { ServerResponse } from 'http';

@Component()
export class CustomerService {
    
    constructor(@InjectModel(CustomerSchema) private readonly customerModel: Model<Customer>){}

    async create(customer: CustomerDto): Promise<Customer> {
        const createdCustomer = new this.customerModel(customer);
        return await createdCustomer.save();
    }

    async find(parameters: CustomerSearchParamsDto, res: ServerResponse): Promise<Customer[]> {
        var searchParams: any = {};
        if (parameters.name) searchParams.name = { $regex: new RegExp(`^${parameters.name}`, 'i') };
        if (parameters.kbo) searchParams.kbo = { $regex: new RegExp(`^${parameters.kbo}`, 'i') };

        return await QueryHelpers.find(this.customerModel, searchParams, parameters, res);
    }

    async findOne(customerId: string): Promise<Customer> {
        return await this.customerModel.findById(customerId);
    }

    async update(customerId: string, customer: CustomerDto): Promise<Customer> {
        return await this.customerModel.findOneAndUpdate({ _id: customerId }, { $set: customer }, {new: true});
    }

    async delete(customerId: string) {
        return await this.customerModel.findByIdAndRemove(customerId);
    }
}