import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";
import { Group } from "../../shared/enum/enums";

export class CreateTypeDto {
    @ApiModelProperty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsString()
    readonly values: string;

    @ApiModelProperty()
    @IsString()
    readonly icon: string;

    @ApiModelProperty()
    @IsEnum(Group)
    readonly group: Group;
}
