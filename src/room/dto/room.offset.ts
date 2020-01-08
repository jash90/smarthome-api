import { ApiModelProperty } from "@nestjs/swagger";
import { RoomDto } from "./room.dto";

export class RoomOffset {
    @ApiModelProperty()
    readonly rows: RoomDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(roomOffset: RoomOffset) {
        this.rows = roomOffset.rows;
        this.count = roomOffset.count;
    }
}
