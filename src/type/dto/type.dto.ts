import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "../type.entity";
import { Group } from "../../shared/enum/enums";

export class TypeDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly values: string;

    @ApiModelProperty()
    readonly icon: string;

    @ApiModelProperty()
    readonly group: Group;

    @ApiModelProperty()
    readonly min: number = null;

    @ApiModelProperty()
    readonly max: number = null;

    constructor(type: Type) {
        this.name = type.name;
        this.values = type.values;
        this.icon = type.icon;
        this.group = type.group;
        if (type.group === Group.slider) {
            let values: number[] = JSON.parse(type.values);
            this.min = Math.min(...values);
            this.max = Math.max(...values);
        }
    }
}
