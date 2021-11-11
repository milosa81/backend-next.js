import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class SortingParamsDto {
    @ApiModelProperty()
    @IsString() 
    field: string;

    @ApiModelProperty()
    @IsString() 
    order: string;
}