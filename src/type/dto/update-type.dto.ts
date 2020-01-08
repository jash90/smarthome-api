import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class UpdateTypeDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name?: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly values?: string;
}
