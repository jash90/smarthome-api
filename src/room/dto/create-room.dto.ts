import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";
import { ControlDto } from '../../control/dto/control.dto';
export class CreateRoomDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;
}
