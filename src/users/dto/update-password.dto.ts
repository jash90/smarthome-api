import { ApiModelProperty } from "@nestjs/swagger";
import {
    IsString,
    MinLength,
} from "class-validator";

export class UpdatePasswordDto {
    @ApiModelProperty()
    @IsString()
    @MinLength(6)
    readonly password: string;

    @ApiModelProperty()
    @IsString()
    @MinLength(6)
    readonly repeatPassword: string;
}
