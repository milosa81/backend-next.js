import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from './schema/profile.schema';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';



@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Profile', schema: ProfileSchema }
        ])
    ],
    controllers: [
        ProfileController
    ],
    components: [
        ProfileService
    ],
})
export class ProfileModule { }