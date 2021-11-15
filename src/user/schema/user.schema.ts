import * as mongoose from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';
import { HttpStatus } from '@nestjs/common';
import { CustomError } from '../../shared/exceptions/custom-error';

const SALT_WORK_FACTOR = 10;

export const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { collection: 'User', timestamps:{} });

UserSchema.pre('save', async function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    try {
        var salt = await genSalt(SALT_WORK_FACTOR);
        user.password = await hash(user.password, salt);
    } catch (error) {
        throw new CustomError('Something went wrong generating the password hash/salt', HttpStatus.INTERNAL_SERVER_ERROR);
    }
});
