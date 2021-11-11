import { Controller, Get, Query, Request, Param, Post, Body, Req } from "@nestjs/common";
import { CustomerSearchParamsDto } from "./dto/customer-search-params.dto";
import { CustomerDto } from "./dto/customer.dto";
import { CustomerService } from "./customer.service";
import { Customer } from "./interfaces/customer.interface";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('Customers')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}
    @Get()
    async find(@Req() req, @Query() parameters: CustomerSearchParamsDto): Promise<Customer[]> {
        return this.customerService.find(parameters, req.res);
    }

    @Get(':customerId')
    async findOne(@Param('customerId') customerId: string): Promise<Customer> {
        return this.customerService.findOne(customerId);
    }

    @Post()
    async create(@Body() customerDto: CustomerDto) {
        this.customerService.create(customerDto);
    }
}