import { ApiModelProperty } from "@nestjs/swagger";
import { FlatDto } from "./flat.dto";

export class FlatOffset {
    @ApiModelProperty()
    readonly rows: FlatDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(flatOffset: FlatOffset) {
        this.rows = flatOffset.rows;
        this.count = flatOffset.count;
    }
}
