import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards
} from "@nestjs/common";
import {
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiImplicitParam,
    ApiOkResponse,
    ApiUseTags
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { ConditionDto } from "./dto/condition.dto";
import { CreateConditionDto } from "./dto/create-condition.dto";
import { UpdateConditionDto } from "./dto/update-condition.dto";
import { ConditionOffset } from "./dto/condition.offset";
import { Condition } from "./condition.entity";
import { ConditionService } from "./conditions.service";

@Controller("conditions")
@ApiUseTags("conditions")
export class ConditionController {
    constructor(private readonly conditionsService: ConditionService) {}

    @Get()
    @ApiOkResponse({ type: [ConditionDto] })
    findAll(): Promise<ConditionDto[]> {
        return this.conditionsService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: ConditionDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(
        @Param("id", new ParseIntPipe()) id: number
    ): Promise<ConditionDto> {
        return this.conditionsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Condition })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateConditionDto): Promise<Condition> {
        return this.conditionsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: Condition })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateConditionDto
    ): Promise<Condition> {
        return this.conditionsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Condition })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<Condition> {
        return this.conditionsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: ConditionOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<ConditionOffset> {
        return this.conditionsService.offset(index);
    }
}
