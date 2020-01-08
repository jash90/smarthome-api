import { ApiModelProperty } from "@nestjs/swagger";
import { RoomControl } from "../roomControl.entity";

export class RoomControlDto {
    @ApiModelProperty()
    readonly roomId: number;

    @ApiModelProperty()
    readonly controlId: number;

    constructor(roomControl: RoomControl) {
        this.roomId = roomControl.roomId;
        this.controlId = roomControl.controlId;
    }
}
