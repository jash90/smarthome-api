import { ApiModelProperty } from "@nestjs/swagger";
import { Control } from "../control.entity";
import { GroupControl } from "../../shared/enum/enums";
import { TypeDto } from "../../type/dto/type.dto";

export class ControlDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly value: string;

    @ApiModelProperty()
    readonly type: TypeDto;

    @ApiModelProperty()
    readonly userId: number;

    @ApiModelProperty()
    readonly roomId?: number;

    constructor(control: Control) {
        this.id = control.id;
        this.name = control.name;
        this.value = control.value;
        this.type = new TypeDto(control.type);
        this.userId = control.userId;
        this.roomId = control.roomId;
    }
}
