import { Controller, Get, Query, Request, Param, Post, Body, Req, Put, Delete, HttpException } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";
import { QuerystringTransformPipe } from "../shared/pipes/querystring-transform-pipe";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { MongoIdValidationPipe } from './../shared/pipes/mongo-id-validation-pipe';


@ApiUseTags('Users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() userDto: UserDto) {
        try{
            await this.userService.create(userDto);
        } catch(err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }

    @Put(':userId')
    async update(@Param('userId', new MongoIdValidationPipe()) userId: string, @Body() userDto: UserDto) {
        try{
            await this.userService.update(userId, userDto);
        } catch(err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}