import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional, IsNotEmpty } from "class-validator";
export class CreateRoomDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}
