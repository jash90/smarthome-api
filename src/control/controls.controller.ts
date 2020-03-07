import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseGuards,
    Req
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
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @ApiOkResponse({ type: [ControlDto] })
    findAll(@Req() request): Promise<ControlDto[]> {
        return this.controlsService.findAll(request.user.id);
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
    create(
        @Body() createDto: CreateControlDto,
        @Req() request
    ): Promise<Control> {
        return this.controlsService.create(createDto, request.user.id);
    }

    @Put(":id")
    @ApiOkResponse({ type: Control })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateControlDto,
        @Req() request
    ): Promise<Control> {
        return this.controlsService.update(id, UpdateDto, request.user.id);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Control })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(
        @Param("id", new ParseIntPipe()) id: number,
        @Req() request
    ): Promise<Control> {
        return this.controlsService.delete(id, request.user.id);
    }

    @Get(":id")
    @ApiOkResponse({ type: ControlOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<ControlOffset> {
        return this.controlsService.offset(index);
    }
}
