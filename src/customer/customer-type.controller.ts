import { CustomerType } from './interfaces/customer-type.interface';
import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Get, HttpException } from '@nestjs/common';
import { CustomerTypeService } from './customer-type.service';


@ApiUseTags('CustomerTypes')
@Controller('customerType')
export class CustomerTypeController {
    constructor(private readonly customerTypeService: CustomerTypeService) { }

    @Get()
    async find(): Promise<CustomerType[]> {
        try {
            return await this.customerTypeService.find();
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}