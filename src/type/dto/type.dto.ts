import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "../type.entity";
import { GroupControl } from "../../shared/enum/enums";

export class TypeDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly values: string;

    @ApiModelProperty()
    readonly icon: string;

    @ApiModelProperty()
    readonly group: GroupControl;

    constructor(type: Type) {
        this.name = type.name;
        this.values = type.values;
        this.icon = type.icon;
        this.group = type.group;
    }
}
