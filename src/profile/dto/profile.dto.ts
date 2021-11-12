import { AddressDto } from "../../shared/dto/address.dto";
import { IsString, ValidateNested, IsNotEmpty, IsArray, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class ProfileDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty({ required: false })
    @IsString()
    @IsNotEmpty()
    readonly kbo: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly phone: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly iban: string;

    @ApiModelProperty()
    @ValidateNested()
    readonly address: AddressDto;
}