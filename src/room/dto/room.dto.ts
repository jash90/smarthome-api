import { ApiModelProperty } from "@nestjs/swagger";
import { Room } from "../room.entity";
import { ControlDto } from "../../control/dto/control.dto";

export class RoomDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly userId: number;

    @ApiModelProperty()
    readonly controls: ControlDto[];

    constructor(room: Room) {
        this.id = room.id;
        this.name = room.name;
        this.userId = room.userId;
    }
}
