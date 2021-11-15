import { Model } from 'mongoose';
import { Component, HttpStatus } from '@nestjs/common';
import { Sku } from "./interfaces/sku.interface";
import { SkuDto } from './dto/sku.dto';
import { SkuSchema } from './schema/sku.schema';
import { InjectModel } from '@nestjs/mongoose';
import { QueryHelpers } from '../shared/helpers/query-helpers';
import { SkuSearchParamsDto } from './dto/sku-search-params.dto';
import { ServerResponse } from 'http';
import { CustomError } from '../shared/exceptions/custom-error';

@Component()
export class SkuService {
    constructor(@InjectModel(SkuSchema) private readonly skuModel: Model<Sku>){}

    async create(sku: SkuDto): Promise<Sku> {
        const createdSku = new this.skuModel(sku);
        return await createdSku.save();
    }

    async update(skuId: string, sku: SkuDto): Promise<Sku> {
        var dbSku = await this.skuModel.findOneAndUpdate({ _id: skuId }, { $set: sku }, {new: true}).exec();
        if(!dbSku) {
            throw new CustomError('Sku with given id was not found', HttpStatus.NOT_FOUND);
        }
        return dbSku;
    }

    async delete(skuId: string) {
        await this.skuModel.findByIdAndRemove(skuId).exec();
    }

    async find(parameters: SkuSearchParamsDto, res: ServerResponse): Promise<Sku[]> {
        var searchParams: any = {};
        if (parameters.name) searchParams.name = { $regex: new RegExp(`^${parameters.name}`, 'i') };
        if (parameters.price) searchParams.price = parameters.price;
        if (parameters.vat) searchParams.vat = parameters.vat;
        
        return await QueryHelpers.find(this.skuModel, searchParams, parameters, res);
    }

    async findOne(skuId: string): Promise<Sku> {
        return await this.skuModel.findById(skuId).exec();
    }
}