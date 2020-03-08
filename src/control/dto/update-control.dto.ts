import { ApiModelProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNumber,
    IsOptional,
    IsNumberString
} from "class-validator";

export class UpdateControlDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name?: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly value?: string;

    @ApiModelProperty()
    @IsNumberString()
    @IsOptional()
    readonly typeId?: number;

    @ApiModelProperty()
    @IsNumberString()
    @IsOptional()
    readonly roomId?: number;
}
