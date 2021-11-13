import { IsString, IsOptional, IsNotEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class InvoiceStateDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly _id?: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}