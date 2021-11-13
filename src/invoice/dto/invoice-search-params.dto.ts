import { IsString, ValidateNested, IsOptional, IsNumber } from "class-validator";
import { PaginationParamsDto } from "../../shared/dto/pagination-params.dto";
import { SortingParamsDto } from "../../shared/dto/sorting-params.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { InvoiceCustomerSearchParamsDto } from "./invoice-customer-search-params.dto";

export class InvoiceSearchParamsDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsNumber()
    readonly number?: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly customer?: InvoiceCustomerSearchParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly pagination?: PaginationParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly sorting?: SortingParamsDto;
}