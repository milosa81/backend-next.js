import { IsString } from "class-validator";
import { ApiImplicitBody, ApiModelProperty } from "@nestjs/swagger";

export class AddressDto {
    @ApiModelProperty()
    @IsString() 
    readonly street: string;

    @ApiModelProperty()
    @IsString() 
    readonly number: string;

    @ApiModelProperty()
    @IsString() 
    readonly bus?: string;

    @ApiModelProperty()
    @IsString() 
    readonly zip: string;

    @ApiModelProperty()
    @IsString() 
    readonly place: string;
}