import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateControlDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly value: string;

    @ApiModelProperty()
    @IsNumber()
    readonly typeId: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly roomId?: number;
}
