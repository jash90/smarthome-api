import { ApiModelProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNumber,
    IsOptional,
    IsNumberString,
    IsNotEmpty
} from "class-validator";

export class CreateControlDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly value: string;

    @ApiModelProperty()
    @IsNumberString()
    readonly typeId: number;

    @ApiModelProperty()
    @IsNumberString()
    @IsOptional()
    readonly roomId?: number;
}
