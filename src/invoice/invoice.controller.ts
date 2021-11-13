import { Controller, Get, Query, Request, Param, Post, Body, Req, Put } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { InvoiceSearchParamsDto } from "./dto/invoice-search-params.dto";
import { InvoiceDto } from "./dto/invoice.dto";
import { InvoiceService } from "./invoice.service";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";

@ApiUseTags('Invoices')
@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService){}
    @Get()
    async find(@Req() req, @Query(new QuerystringTransformPipe()) parameters: InvoiceSearchParamsDto): Promise<InvoiceDto[]> {
        return this.invoiceService.find(parameters, req.res);
    }

    @Get(':invoiceId')
    async findOne(@Param('invoiceId') invoiceId: string): Promise<InvoiceDto> {
        return this.invoiceService.findOne(invoiceId);
    }

    @Get('download/:invoiceId')
    async generateInvoice(@Req() req, @Param('invoiceId') invoiceId: string): Promise<any> {
        return this.invoiceService.generateInvoice(invoiceId, req.res);
    }

    @Post()
    async create(@Body() invoiceDto: InvoiceDto) {
        return this.invoiceService.create(invoiceDto);
    }

    @Put(':invoiceId')
    async update(@Param('invoiceId') invoiceId: string, @Body() invoiceDto: InvoiceDto): Promise<InvoiceDto> {
        return this.invoiceService.update(invoiceId, invoiceDto);
    }
}