import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, Delete } from "@nestjs/common";
import { SkuSearchParamsDto } from "./dto/sku-search-params.dto";
import { SkuDto } from "./dto/sku.dto";
import { SkuService } from "./sku.service";
import { Sku } from "./interfaces/sku.interface";
import { ApiUseTags } from "@nestjs/swagger";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";

@ApiUseTags('Skus')
@Controller('sku')
export class SkuController {
    constructor(private readonly skuService: SkuService){}
    @Get(':skuId')
    async findOne(@Param('skuId') skuId: string): Promise<Sku> {
        return this.skuService.findOne(skuId);
    }

    @Get()
    async find(@Req() req, @Query(new QuerystringTransformPipe()) parameters: SkuSearchParamsDto): Promise<Sku[]> {
        return this.skuService.find(parameters, req.res);
    }

    @Post()
    async create(@Body() skuDto: SkuDto): Promise<SkuDto> {
        return this.skuService.create(skuDto);
    }

    @Put(':skuId')
    async update(@Param('skuId') skuId: string, @Body() skuDto: SkuDto): Promise<SkuDto> {
        return this.skuService.update(skuId, skuDto);
    }

    @Delete(':skuId')
    async delete(@Param('skuId') skuId: string) {
        this.skuService.delete(skuId);
    }
}