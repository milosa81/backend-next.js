import { IsString, ValidateNested, IsOptional, IsNumber } from "class-validator";
import { PaginationParamsDto } from "../../shared/dto/pagination-params.dto";
import { SortingParamsDto } from "../../shared/dto/sorting-params.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class SkuSearchParamsDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsNumber()
    readonly price?: number;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsNumber()
    readonly vat?: number;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly pagination: PaginationParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly sorting: SortingParamsDto;
}