import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, Delete } from "@nestjs/common";
import { CustomerSearchParamsDto } from "./dto/customer-search-params.dto";
import { CustomerDto } from "./dto/customer.dto";
import { CustomerService } from "./customer.service";
import { Customer } from "./interfaces/customer.interface";
import { ApiUseTags } from "@nestjs/swagger";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";

@ApiUseTags('Customers')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}
    @Get()
    async find(@Req() req, @Query(new QuerystringTransformPipe()) parameters: CustomerSearchParamsDto): Promise<Customer[]> {
        return this.customerService.find(parameters, req.res);
    }

    @Get(':customerId')
    async findOne(@Param('customerId') customerId: string): Promise<Customer> {
        return this.customerService.findOne(customerId);
    }

    @Post()
    async create(@Body() customerDto: CustomerDto) {
        return this.customerService.create(customerDto);
    }

    @Put(':skuId')
    async update(@Param('customerId') customerId: string, @Body() customerDto: CustomerDto): Promise<CustomerDto> {
        return this.customerService.update(customerId, customerDto);
    }

    @Delete(':customerId')
    async delete(@Param('customerId') customerId: string) {
        this.customerService.delete(customerId);
    }
}