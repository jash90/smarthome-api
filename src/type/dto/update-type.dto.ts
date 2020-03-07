import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { Group } from "../../shared/enum/enums";

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
    @IsOptional()
    readonly icon?: string;

    @ApiModelProperty()
    @IsEnum(Group)
    @IsOptional()
    readonly group?: Group;
}
