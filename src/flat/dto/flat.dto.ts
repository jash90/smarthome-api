import { ApiModelProperty } from "@nestjs/swagger";
import { Flat } from "../flat.entity";

export class FlatDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly userId: number;

    constructor(flat: Flat) {
        this.name = flat.name;
        this.userId = flat.userId;
    }
}
