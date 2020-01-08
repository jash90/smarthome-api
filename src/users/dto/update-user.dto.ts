import { ApiModelProperty } from "@nestjs/swagger";
import {
    IsOptional,
    IsString,
    IsEnum,
    IsISO8601,
    IsNumber,
    Min,
    Max
} from "class-validator";

export class UpdateUserDto {
    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly firstname?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly lastname?: string;
}
