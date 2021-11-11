import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerSchema } from './schema/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerTypeController } from './customer-type.controller';
import { CustomerTypeSchema } from './schema/customer-type.schema';
import { CustomerTypeService } from './customer-type.service';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Customer', schema: CustomerSchema }, 
            { name: 'CustomerType', schema: CustomerTypeSchema }
        ])
    ],
    controllers: [
        CustomerController, 
        CustomerTypeController
    ],
    components: [
        CustomerService,
        CustomerTypeService
    ],
})
export class CustomerModule { }