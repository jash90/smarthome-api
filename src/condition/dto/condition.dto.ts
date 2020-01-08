import { ApiModelProperty } from "@nestjs/swagger";
import { Condition } from "../condition.entity";

export class ConditionDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly value: string;

    @ApiModelProperty()
    readonly userId: number;

    constructor(condition: Condition) {
        this.name = condition.name;
        this.value = condition.value;
        this.userId = condition.userId;
    }
}
