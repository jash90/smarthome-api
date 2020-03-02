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
import { RoomDto } from "./dto/room.dto";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { RoomOffset } from "./dto/room.offset";
import { Room } from "./room.entity";
import { RoomService } from "./rooms.service";
import request from 'supertest';

@Controller("rooms")
@ApiUseTags("rooms")
export class RoomController {
    constructor(private readonly roomsService: RoomService) {}

    @Get()
    @ApiOkResponse({ type: [RoomDto] })
    @UseGuards(AuthGuard("jwt"))
    findAll(@Req() request): Promise<RoomDto[]> {
        return this.roomsService.findAll(request.user.id);
    }

    @Get(":id")
    @ApiOkResponse({ type: RoomDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(@Param("id", new ParseIntPipe()) id: number): Promise<RoomDto> {
        return this.roomsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Room })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateRoomDto): Promise<Room> {
        return this.roomsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: Room })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateRoomDto
    ): Promise<Room> {
        return this.roomsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Room })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<Room> {
        return this.roomsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: RoomOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<RoomOffset> {
        return this.roomsService.offset(index);
    }
}
