import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateConditionDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly value: string;

    @ApiModelProperty()
    @IsNumber()
    readonly userId: number;
}
