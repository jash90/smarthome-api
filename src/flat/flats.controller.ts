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
import { FlatDto } from "./dto/flat.dto";
import { CreateFlatDto } from "./dto/create-flat.dto";
import { UpdateFlatDto } from "./dto/update-flat.dto";
import { FlatOffset } from "./dto/flat.offset";
import { Flat } from "./flat.entity";
import { FlatService } from "./flats.service";

@Controller("flats")
@ApiUseTags("flats")
export class FlatController {
    constructor(private readonly flatsService: FlatService) {}

    @Get()
    @ApiOkResponse({ type: [FlatDto] })
    findAll(): Promise<FlatDto[]> {
        return this.flatsService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: FlatDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(@Param("id", new ParseIntPipe()) id: number): Promise<FlatDto> {
        return this.flatsService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Flat })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateFlatDto): Promise<Flat> {
        return this.flatsService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: Flat })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateFlatDto
    ): Promise<Flat> {
        return this.flatsService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Flat })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<Flat> {
        return this.flatsService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: FlatOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<FlatOffset> {
        return this.flatsService.offset(index);
    }
}
