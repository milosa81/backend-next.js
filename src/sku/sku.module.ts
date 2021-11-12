import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkuSchema } from './schema/sku.schema';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Sku', schema: SkuSchema }
        ])
    ],
    controllers: [
        SkuController
    ],
    components: [
        SkuService
    ],
})
export class SkuModule { }