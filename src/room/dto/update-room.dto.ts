import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateRoomDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name?: string;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly userId?: number;
}
