import { ApiModelProperty } from "@nestjs/swagger";
import { ControlDto } from "./control.dto";

export class ControlOffset {
    @ApiModelProperty()
    readonly rows: ControlDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(controlOffset: ControlOffset) {
        this.rows = controlOffset.rows;
        this.count = controlOffset.count;
    }
}
