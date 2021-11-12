import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class SkuDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly vat: number;

    @ApiModelProperty({ required: false })
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
}