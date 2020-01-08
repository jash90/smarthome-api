import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypeDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly values: string;
}
