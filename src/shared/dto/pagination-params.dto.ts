import { IsInt } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class PaginationParamsDto {
    @ApiModelProperty()
    @IsInt() 
    itemsPerPage: number;
    
    @ApiModelProperty()
    @IsInt() 
    currentPage: number;
}