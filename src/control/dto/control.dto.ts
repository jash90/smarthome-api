import { ApiModelProperty } from "@nestjs/swagger";
import { Control } from "../control.entity";

export class ControlDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly value: string;

    @ApiModelProperty()
    readonly typeId: number;

    @ApiModelProperty()
    readonly userId: number;

    @ApiModelProperty()
    readonly roomId?: number;

    constructor(control: Control) {
        this.id = control.id;
        this.name = control.name;
        this.value = control.value;
        this.typeId = control.type.id;
        this.userId = control.userId;
        this.roomId = control.roomId;
    }
}
