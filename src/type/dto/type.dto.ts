import { ApiModelProperty } from "@nestjs/swagger";
import { Type } from "../type.entity";

export class TypeDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly values: string;

    constructor(type: Type) {
        this.name = type.name;
        this.values = type.values;
    }
}
