import { IsString, ValidateNested, IsOptional, IsNumber, IsInt } from "class-validator";
import { Type } from 'class-transformer';
import { PaginationParamsDto } from "../../shared/dto/pagination-params.dto";
import { SortingParamsDto } from "../../shared/dto/sorting-params.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { InvoiceCustomerSearchParamsDto } from "./invoice-customer-search-params.dto";

export class InvoiceSearchParamsDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    readonly number?: number;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly customer?: InvoiceCustomerSearchParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    @Type(() => PaginationParamsDto)
    readonly pagination?: PaginationParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly sorting?: SortingParamsDto;
}