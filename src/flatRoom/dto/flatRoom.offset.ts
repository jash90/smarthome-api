import { ApiModelProperty } from "@nestjs/swagger";
import { FlatRoomDto } from "./flatRoom.dto";

export class FlatRoomOffset {
    @ApiModelProperty()
    readonly rows: FlatRoomDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(flatRoomOffset: FlatRoomOffset) {
        this.rows = flatRoomOffset.rows;
        this.count = flatRoomOffset.count;
    }
}
