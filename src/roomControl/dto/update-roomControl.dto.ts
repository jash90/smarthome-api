import { ApiModelProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class UpdateRoomControlDto {
    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly roomId?: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly controlId?: number;
}
