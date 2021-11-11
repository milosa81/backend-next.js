import { CustomerTypeDto } from "./customer-type.dto";
import { ContactDto } from "./contact.dto";
import { AddressDto } from "../../shared/dto/address.dto";
import { IsString, ValidateNested, IsNotEmpty, IsArray, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CustomerDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly kbo?: string;

    @ApiModelProperty()
    @ValidateNested()
    readonly type: CustomerTypeDto;

    @ApiModelProperty()
    @ValidateNested()
    readonly address: AddressDto;


    @ApiModelProperty({ type: ContactDto, isArray: true, required: false })
    @ValidateNested()
    @IsArray()
    readonly contacts: ContactDto[];
}