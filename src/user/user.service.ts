import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { UserSchema } from "./schema/user.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { UserDto } from "./dto/user.dto";
import { CustomError } from './../shared/exceptions/custom-error';
import { ObjectId } from "mongodb";

@Component()
export class UserService {

    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async create(user: UserDto): Promise<User> {
        var dbUser = await this.userModel.findOne({ email: user.email }).exec();
        if(dbUser) {
            throw new CustomError('Email already exist', HttpStatus.CONFLICT);
        }
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async update(userId: string, user: UserDto): Promise<User> {
        var dbUser = await this.userModel.findByIdAndUpdate(userId, { $set: user }, { new: true });
        if(!dbUser) {
            throw new CustomError('User with given id was not found', HttpStatus.NOT_FOUND);
        }
        return dbUser;
    } 
}