import { ApiModelProperty } from "@nestjs/swagger";
import { FlatRoom } from "../flatRoom.entity";

export class FlatRoomDto {
    @ApiModelProperty()
    readonly flatId: number;

    @ApiModelProperty()
    readonly roomId: number;

    constructor(flatRoom: FlatRoom) {
        this.flatId = flatRoom.flatId;
        this.roomId = flatRoom.roomId;
    }
}
