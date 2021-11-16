import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, Delete, HttpException } from "@nestjs/common";
import { CustomerSearchParamsDto } from "./dto/customer-search-params.dto";
import { CustomerDto } from "./dto/customer.dto";
import { CustomerService } from "./customer.service";
import { Customer } from "./interfaces/customer.interface";
import { ApiUseTags } from "@nestjs/swagger";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";

@ApiUseTags('Customers')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Get()
    async find(@Req() req, @Query() parameters: CustomerSearchParamsDto): Promise<Customer[]> {
        try {
            return await this.customerService.find(parameters, req.res);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Get(':customerId')
    async findOne(@Param('customerId') customerId: string): Promise<Customer> {
        try {
            return await this.customerService.findOne(customerId);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Post()
    async create(@Body() customerDto: CustomerDto) {
        try {
            return await this.customerService.create(customerDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Put(':customerId')
    async update(@Param('customerId') customerId: string, @Body() customerDto: CustomerDto): Promise<CustomerDto> {
        try {
            return await this.customerService.update(customerId, customerDto);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Delete(':customerId')
    async delete(@Param('customerId') customerId: string) {
        try {
            await this.customerService.delete(customerId);
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}