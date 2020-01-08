import { ApiModelProperty } from "@nestjs/swagger";
import { Control } from "../control.entity";

export class ControlDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly value: string;

    @ApiModelProperty()
    readonly typeId: number;

    @ApiModelProperty()
    readonly userId: number;

    constructor(control: Control) {
        this.name = control.name;
        this.value = control.value;
        this.typeId = control.typeId;
        this.userId = control.userId;
    }
}
