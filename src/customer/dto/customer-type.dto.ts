import { IsString, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CustomerTypeDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @IsString()
    readonly name: string;
}