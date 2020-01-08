import { ApiModelProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateFlatRoomDto {
    @ApiModelProperty()
    @IsNumber()
    readonly flatId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly roomId: number;
}
