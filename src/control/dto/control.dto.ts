import { ApiModelProperty } from "@nestjs/swagger";
import { Control } from "../control.entity";
import { GroupControl } from "../../shared/enum/enums";

export class ControlDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly value: string;

    @ApiModelProperty()
    readonly icon: string;

    @ApiModelProperty()
    readonly group: GroupControl;

    @ApiModelProperty()
    readonly userId: number;

    @ApiModelProperty()
    readonly roomId?: number;

    constructor(control: Control) {
        this.id = control.id;
        this.name = control.name;
        this.value = control.value;
        this.icon = control.type.icon;
        this.group = control.type.group;
        this.userId = control.userId;
        this.roomId = control.roomId;
    }
}
