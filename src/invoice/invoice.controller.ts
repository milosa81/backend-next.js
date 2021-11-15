import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, HttpException } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { InvoiceSearchParamsDto } from "./dto/invoice-search-params.dto";
import { InvoiceDto } from "./dto/invoice.dto";
import { InvoiceService } from "./invoice.service";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";
import { MongoIdValidationPipe } from "../shared/pipes/mongo-id-validation-pipe";

@ApiUseTags('Invoices')
@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) { }
    @Get()
    async find(@Req() req, @Query(new QuerystringTransformPipe()) parameters: InvoiceSearchParamsDto): Promise<InvoiceDto[]> {
        try {
            return await this.invoiceService.find(parameters, req.res);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Get(':invoiceId')
    async findOne(@Param('invoiceId', new MongoIdValidationPipe()) invoiceId: string): Promise<InvoiceDto> {
        try {
            return await this.invoiceService.findOne(invoiceId);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Get('download/:invoiceId')
    async generateInvoice(@Req() req, @Param('invoiceId', new MongoIdValidationPipe()) invoiceId: string): Promise<any> {
        try {
            return await this.invoiceService.generateInvoice(invoiceId, req.res);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Post()
    async create(@Body() invoiceDto: InvoiceDto) {
        try {
            return await this.invoiceService.create(invoiceDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Put(':invoiceId')
    async update(@Param('invoiceId', new MongoIdValidationPipe()) invoiceId: string, @Body() invoiceDto: InvoiceDto): Promise<InvoiceDto> {
        try {
            return await this.invoiceService.update(invoiceId, invoiceDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}