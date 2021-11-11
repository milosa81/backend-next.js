import { IsString, IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class ContactDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsEmail()
    readonly email?: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly phone: string;
}