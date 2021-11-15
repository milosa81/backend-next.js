import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, Delete, HttpException } from "@nestjs/common";
import { SkuSearchParamsDto } from "./dto/sku-search-params.dto";
import { SkuDto } from "./dto/sku.dto";
import { SkuService } from "./sku.service";
import { Sku } from "./interfaces/sku.interface";
import { ApiUseTags } from "@nestjs/swagger";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";
import { MongoIdValidationPipe } from "../shared/pipes/mongo-id-validation-pipe";

@ApiUseTags('Skus')
@Controller('sku')
export class SkuController {
    constructor(private readonly skuService: SkuService) { }
    @Get(':skuId')
    async findOne(@Param('skuId', new MongoIdValidationPipe()) skuId: string): Promise<Sku> {
        try {
            return await this.skuService.findOne(skuId);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Get()
    async find(@Req() req, @Query(new QuerystringTransformPipe()) parameters: SkuSearchParamsDto): Promise<Sku[]> {
        try {
            return await this.skuService.find(parameters, req.res);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Post()
    async create(@Body() skuDto: SkuDto): Promise<SkuDto> {
        try {
            return await this.skuService.create(skuDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Put(':skuId')
    async update(@Param('skuId', new MongoIdValidationPipe()) skuId: string, @Body() skuDto: SkuDto): Promise<SkuDto> {
        try{
            return await this.skuService.update(skuId, skuDto);
        } catch(err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Delete(':skuId')
    async delete(@Param('skuId', new MongoIdValidationPipe()) skuId: string) {
        try {
            await this.skuService.delete(skuId);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}