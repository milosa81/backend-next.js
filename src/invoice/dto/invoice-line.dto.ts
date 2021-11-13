import { AddressDto } from "../../shared/dto/address.dto";
import { IsString, ValidateNested, IsNotEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { SkuDto } from "../../sku/dto/sku.dto";

export class InvoiceLineDto {
    @ApiModelProperty()
    @ValidateNested()
    readonly sku: SkuDto;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly vat: number;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly price: number;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly amount: number;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly total: number;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly totalInc: number;
}