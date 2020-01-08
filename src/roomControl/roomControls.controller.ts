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
import { RoomControlDto } from "./dto/roomControl.dto";
import { CreateRoomControlDto } from "./dto/create-roomControl.dto";
import { UpdateRoomControlDto } from "./dto/update-roomControl.dto";
import { RoomControlOffset } from "./dto/roomControl.offset";
import { RoomControl } from "./roomControl.entity";
import { RoomControlService } from "./roomControls.service";

@Controller("roomControls")
@ApiUseTags("roomControls")
export class RoomControlController {
    constructor(private readonly roomControlsService: RoomControlService) {}

    @Get()
    @ApiOkResponse({ type: [RoomControlDto] })
    findAll(): Promise<RoomControlDto[]> {
        return this.roomControlsService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: RoomControlDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(
        @Param("id", new ParseIntPipe()) id: number
    ): Promise<RoomControlDto> {
        return this.roomControlsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: RoomControl })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateRoomControlDto): Promise<RoomControl> {
        return this.roomControlsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: RoomControl })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateRoomControlDto
    ): Promise<RoomControl> {
        return this.roomControlsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: RoomControl })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<RoomControl> {
        return this.roomControlsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: RoomControlOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<RoomControlOffset> {
        return this.roomControlsService.offset(index);
    }
}
