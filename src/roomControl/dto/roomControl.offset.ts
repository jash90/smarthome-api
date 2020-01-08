import { ApiModelProperty } from "@nestjs/swagger";
import { RoomControlDto } from "./roomControl.dto";

export class RoomControlOffset {
    @ApiModelProperty()
    readonly rows: RoomControlDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(roomControlOffset: RoomControlOffset) {
        this.rows = roomControlOffset.rows;
        this.count = roomControlOffset.count;
    }
}
