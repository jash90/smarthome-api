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
import { ControlDto } from "./dto/control.dto";
import { CreateControlDto } from "./dto/create-control.dto";
import { UpdateControlDto } from "./dto/update-control.dto";
import { ControlOffset } from "./dto/control.offset";
import { Control } from "./control.entity";
import { ControlService } from "./controls.service";

@Controller("controls")
@ApiUseTags("controls")
export class ControlController {
    constructor(private readonly controlsService: ControlService) {}

    @Get()
    @ApiOkResponse({ type: [ControlDto] })
    findAll(): Promise<ControlDto[]> {
        return this.controlsService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: ControlDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(@Param("id", new ParseIntPipe()) id: number): Promise<ControlDto> {
        return this.controlsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Control })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateControlDto): Promise<Control> {
        return this.controlsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: Control })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateControlDto
    ): Promise<Control> {
        return this.controlsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Control })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<Control> {
        return this.controlsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: ControlOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<ControlOffset> {
        return this.controlsService.offset(index);
    }
}
