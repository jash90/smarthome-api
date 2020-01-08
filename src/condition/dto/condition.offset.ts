import { ApiModelProperty } from "@nestjs/swagger";
import { ConditionDto } from "./condition.dto";

export class ConditionOffset {
    @ApiModelProperty()
    readonly rows: ConditionDto[];
    @ApiModelProperty()
    readonly count: number;

    constructor(conditionOffset: ConditionOffset) {
        this.rows = conditionOffset.rows;
        this.count = conditionOffset.count;
    }
}
