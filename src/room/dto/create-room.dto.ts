import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional, IsEmpty } from "class-validator";
export class CreateRoomDto {
    @ApiModelProperty()
    @IsString()
    @IsEmpty()
    readonly name: string;
}
