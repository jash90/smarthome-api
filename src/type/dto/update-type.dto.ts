import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { GroupControl } from "src/shared/enum/enums";

export class UpdateTypeDto {
    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly name?: string;

    @ApiModelProperty()
    @IsString()
    @IsOptional()
    readonly values?: string;

    @ApiModelProperty()
    @IsString()
    readonly icon: string;

    @ApiModelProperty()
    @IsEnum(GroupControl)
    readonly group: GroupControl;
}
