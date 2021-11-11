import { CustomerType } from './interfaces/customer-type.interface';
import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { CustomerTypeService } from './customer-type.service';


@ApiUseTags('CustomerTypes')
@Controller('customerType')
export class CustomerTypeController {
    constructor(private readonly customerTypeService: CustomerTypeService){}
    
    @Get()
    async find(): Promise<CustomerType[]> {
        return this.customerTypeService.find();
    }
}