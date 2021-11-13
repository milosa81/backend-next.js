import { ApiModelProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class InvoiceCustomerSearchParamsDto {
    @ApiModelProperty({ required: false })
    @IsOptional()
    @IsString()
    readonly name?: string;
}