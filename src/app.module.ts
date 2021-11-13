import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { SkuModule } from './sku/sku.module';
import { ProfileModule } from './profile/customer.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://developerx:test@127.0.0.1:27017/NGInvoicing'),
    CustomerModule,
    SkuModule,
    ProfileModule,
    InvoiceModule
  ],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
