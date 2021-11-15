import { IsString, IsNotEmpty, IsOptional, IsEmail } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiModelProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}