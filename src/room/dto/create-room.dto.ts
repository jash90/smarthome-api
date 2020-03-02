import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateRoomDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsNumber()
    readonly userId: number;

    @ApiModelProperty()
    @IsNumber()
    readonly flatId?: number;
}
