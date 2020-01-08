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
import { TypeDto } from "./dto/type.dto";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { TypeOffset } from "./dto/type.offset";
import { Type } from "./type.entity";
import { TypeService } from "./types.service";

@Controller("types")
@ApiUseTags("types")
export class TypeController {
    constructor(private readonly typesService: TypeService) {}

    @Get()
    @ApiOkResponse({ type: [TypeDto] })
    findAll(): Promise<TypeDto[]> {
        return this.typesService.findAll();
    }

    @Get(":id")
    @ApiOkResponse({ type: TypeDto })
    @ApiImplicitParam({ name: "id", required: true })
    findOne(@Param("id", new ParseIntPipe()) id: number): Promise<TypeDto> {
        return this.typesService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ type: Type })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() createDto: CreateTypeDto): Promise<Type> {
        return this.typesService.create(createDto);
    }

    @Put(":id")
    @ApiOkResponse({ type: Type })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    update(
        @Param("id", new ParseIntPipe()) id: number,
        @Body() UpdateDto: UpdateTypeDto
    ): Promise<Type> {
        return this.typesService.update(id, UpdateDto);
    }

    @Delete(":id")
    @ApiOkResponse({ type: Type })
    @ApiImplicitParam({ name: "id", required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    delete(@Param("id", new ParseIntPipe()) id: number): Promise<Type> {
        return this.typesService.delete(id);
    }

    @Get(":id")
    @ApiOkResponse({ type: TypeOffset })
    offset(
        @Param("id", new ParseIntPipe()) index: number = 0
    ): Promise<TypeOffset> {
        return this.typesService.offset(index);
    }
}
