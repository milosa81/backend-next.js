import { IsString, ValidateNested, IsOptional } from "class-validator";
import { PaginationParamsDto } from "../../shared/dto/pagination-params.dto";
import { SortingParamsDto } from "../../shared/dto/sorting-params.dto";
import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CustomerSearchParamsDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly kbo?: string;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    @Type(() => PaginationParamsDto)
    readonly pagination: PaginationParamsDto;

    @ApiModelProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    readonly sorting: SortingParamsDto;
}