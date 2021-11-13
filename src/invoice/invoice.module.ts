import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './schema/invoice.schema';
import { InvoiceStateSchema } from './schema/invoice-state.schema';
import { InvoiceStateService } from './invoice-state.service';
import { InvoiceStateController } from './invoice-state.controller';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { ProfileSchema } from '../profile/schema/profile.schema';



@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Invoice', schema: InvoiceSchema }, 
            { name: 'InvoiceState', schema: InvoiceStateSchema },
            { name: 'Profile', schema: ProfileSchema}
        ])
    ],
    controllers: [
        InvoiceController, 
        InvoiceStateController
    ],
    components: [
        InvoiceService,
        InvoiceStateService
    ],
})
export class InvoiceModule { }