import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateFlatDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsNumber()
    readonly userId: number;
}
