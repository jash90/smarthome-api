import { ApiModelProperty } from "@nestjs/swagger";
import { Room } from "../room.entity";

export class RoomDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly userId: number;

    constructor(room: Room) {
        this.id = room.id;
        this.name = room.name;
        this.userId = room.userId;
    }
}
