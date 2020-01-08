import { ApiModelProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateRoomControlDto {
    @ApiModelProperty()
    @IsNumber()
    readonly roomId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly controlId: number;
}
