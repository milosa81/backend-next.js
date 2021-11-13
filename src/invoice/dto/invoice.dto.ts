import { IsString, IsEmail, IsNotEmpty, IsOptional, ValidateNested, IsNumber, IsDate, IsArray, IsDateString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { CustomerDto } from "../../customer/dto/customer.dto";
import { InvoiceStateDto } from "./invoice-state.dto";
import { InvoiceLineDto } from "./invoice-line.dto";

export class InvoiceDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @ValidateNested()
    readonly customer: CustomerDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsNumber()
    readonly number: number;

    @ApiModelProperty()
    @ValidateNested()
    readonly state: InvoiceStateDto;

    @ApiModelProperty()
    //@IsDateString()
    @IsNotEmpty()
    readonly invoiceDate: Date;

    @ApiModelProperty()
    @IsNumber()
    readonly total: number;

    @ApiModelProperty()
    @IsNumber()
    readonly totalInc: number;

    @ApiModelProperty()
    @IsNumber()
    readonly totalVat: number;

    @ApiModelProperty({ type: InvoiceLineDto, isArray: true, required: false })
    @ValidateNested()
    @IsArray()
    readonly lines: InvoiceLineDto[];
}