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
import { FlatRoomDto } from "./dto/flatRoom.dto";
import { CreateFlatRoomDto } from "./dto/create-flatRoom.dto";
import { UpdateFlatRoomDto } from "./dto/update-flatRoom.dto";
import { FlatRoomOffset } from "./dto/flatRoom.offset";
import { FlatRoom } from "./flatRoom.entity";
import { FlatRoomService } from "./flatRooms.service";

@Controller("flatRooms")
@ApiUseTags("flatRooms")
export class FlatRoomController {
    constructor(private readonly flatRoomsService: FlatRoomService) {}

    @Get()
    @ApiOkResponse({ type: [FlatRoomDto] })
    findAll(): Promise<FlatRoomDto[]> {
        return this.flatRoomsService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: FlatRoomDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(@Param("id", new ParseIntPipe()) id: number): Promise<FlatRoomDto> {
        return this.flatRoomsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: FlatRoom })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateFlatRoomDto): Promise<FlatRoom> {
        return this.flatRoomsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: FlatRoom })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateFlatRoomDto
    ): Promise<FlatRoom> {
        return this.flatRoomsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: FlatRoom })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<FlatRoom> {
        return this.flatRoomsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: FlatRoomOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<FlatRoomOffset> {
        return this.flatRoomsService.offset(index);
    }
}
