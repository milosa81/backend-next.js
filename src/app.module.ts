import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://developerx:test@127.0.0.1:27017/NGInvoicing'),
    CustomerModule
  ],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
