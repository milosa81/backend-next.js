import { IsInt, IsNotEmpty, IsDefined } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class PaginationParamsDto {
    @ApiModelProperty()
    @IsInt()
    @IsNotEmpty()
    @IsDefined()
    @Type(() => Number)
    itemsPerPage: number;
    
    @ApiModelProperty()
    @IsInt() 
    @IsNotEmpty()
    @IsDefined()
    @Type(() => Number)
    currentPage: number;
}