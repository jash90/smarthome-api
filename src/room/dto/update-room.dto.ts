import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional, IsNotEmpty } from "class-validator";
import { ControlDto } from '../../control/dto/control.dto';

export class UpdateRoomDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly name?: string;
}
