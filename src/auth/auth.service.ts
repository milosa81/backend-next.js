import * as jwt from 'jsonwebtoken';
import { Component, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../user/interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../user/schema/user.schema';
import { LoginDto } from './dto/login.dto';
import { HttpException } from '@nestjs/core';
import { compare } from 'bcrypt';
import { CustomError } from '../shared/exceptions/custom-error';

@Component()
export class AuthService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async performLogin(loginInfo: LoginDto) {
        var dbUser = await this.userModel.findOne({ email: loginInfo.email });
        if (!dbUser) {
            throw new CustomError("UnAuthorized", HttpStatus.UNAUTHORIZED);
        }
        var isMatch = await compare(loginInfo.password, dbUser.password);
        if (isMatch) {
            const expiresIn = 60 * 60, secretOrKey = 'secret';
            const user = { email: dbUser.email };
            const token = jwt.sign(user, secretOrKey, { expiresIn });
            return {
                expires_in: expiresIn,
                access_token: token,
            };
        } else {
            throw new CustomError("UnAuthorized", HttpStatus.UNAUTHORIZED);
        }
    }

    async validateUser(payload: any): Promise<boolean> {
        // put some validation logic here
        // for example query user by id / email / username
        return true;
    }
}