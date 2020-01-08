import { ApiModelProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class UpdateFlatRoomDto {
    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly flatId?: number;

    @ApiModelProperty()
    @IsNumber()
    @IsOptional()
    readonly roomId?: number;
}
