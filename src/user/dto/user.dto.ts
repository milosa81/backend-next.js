import { IsString, IsNotEmpty, IsOptional, IsEmail } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @ApiModelProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}