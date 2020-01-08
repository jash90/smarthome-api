import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateConditionDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name?: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly value?: string;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly userId?: number;
}
