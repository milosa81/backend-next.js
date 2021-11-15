import { Model } from 'mongoose';
import { Component, HttpStatus } from '@nestjs/common';
import { Profile } from "./interfaces/profile.interface";
import { ProfileDto } from './dto/profile.dto';
import { ProfileSchema } from './schema/profile.schema';
import { InjectModel } from '@nestjs/mongoose';
import { QueryHelpers } from '../shared/helpers/query-helpers';
import { ServerResponse } from 'http';
import { CustomError } from '../shared/exceptions/custom-error';

@Component()
export class ProfileService {
    constructor(@InjectModel(ProfileSchema) private readonly profileModel: Model<Profile>){}

    async update(profileId: string, profile: ProfileDto): Promise<Profile> {
        var dbProfile = await this.profileModel.findByIdAndUpdate(profileId, { $set: profile }, {new: true}).exec();
        if(!dbProfile) {
            throw new CustomError('Profile with given id was not found', HttpStatus.NOT_FOUND);
        }
        return dbProfile;
    }

    async findOne(): Promise<Profile> {
        return await this.profileModel.findOne();
    }
}