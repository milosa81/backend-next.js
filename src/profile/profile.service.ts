import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { Profile } from "./interfaces/profile.interface";
import { ProfileDto } from './dto/profile.dto';
import { ProfileSchema } from './schema/profile.schema';
import { InjectModel } from '@nestjs/mongoose';
import { QueryHelpers } from '../shared/helpers/query-helpers';
import { ServerResponse } from 'http';

@Component()
export class ProfileService {
    
    constructor(@InjectModel(ProfileSchema) private readonly profileModel: Model<Profile>){}

    async update(profileId: string, profile: ProfileDto): Promise<Profile> {
        return await this.profileModel.findOneAndUpdate({ _id: profileId }, { $set: profile }, {new: true});
    }

    async findOne(): Promise<Profile> {
        return await this.profileModel.findOne();
    }
}