import {
    IsString,
    IsEmail,
    IsEnum,
    IsISO8601,
    IsOptional,
    MinLength,
    IsNumber,
    Min,
    Max
} from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiModelProperty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    @ApiModelProperty()
    @IsString()
    readonly firstname: string;

    @ApiModelProperty()
    @IsString()
    readonly lastname: string;
}
