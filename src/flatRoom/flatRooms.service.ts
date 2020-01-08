import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { FlatRoom } from "../flatRoom/flatRoom.entity";
import { FlatRoomDto } from "../flatRoom/dto/flatRoom.dto";
import { CreateFlatRoomDto } from "../flatRoom/dto/create-flatRoom.dto";
import { UpdateFlatRoomDto } from "../flatRoom/dto/update-flatRoom.dto";
import { FlatRoomOffset } from "../flatRoom/dto/flatRoom.offset";

@Injectable()
export class FlatRoomService {
    constructor(
        @Inject("FlatRoomsRepository")
        private readonly flatRoomsRepository: typeof FlatRoom
    ) {}

    async findAll(): Promise<FlatRoomDto[]> {
        const flatRooms = await this.flatRoomsRepository.findAll<FlatRoom>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return flatRooms.map(flatRoom => {
            return new FlatRoomDto(flatRoom);
        });
    }

    async findOne(id: number): Promise<FlatRoomDto> {
        const flatRoom = await this.flatRoomsRepository.findByPk<FlatRoom>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!flatRoom) {
            throw new HttpException("No flatRoom found", HttpStatus.NOT_FOUND);
        }

        return new FlatRoomDto(flatRoom);
    }

    async create(CreateDto: CreateFlatRoomDto): Promise<FlatRoom> {
        const flatRoom = new FlatRoom();

        flatRoom.flatId = CreateDto.flatId;
        flatRoom.roomId = CreateDto.roomId;

        try {
            return await flatRoom.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getFlatRoom(id: number): Promise<FlatRoom> {
        const flatRoom = await this.flatRoomsRepository.findByPk<FlatRoom>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!flatRoom) {
            throw new HttpException("No flatRoom found", HttpStatus.NOT_FOUND);
        }

        return flatRoom;
    }

    async update(id: number, UpdateDto: UpdateFlatRoomDto): Promise<FlatRoom> {
        const flatRoom = await this.getFlatRoom(id);

        flatRoom.flatId = UpdateDto.flatId || flatRoom.flatId;
        flatRoom.roomId = UpdateDto.roomId || flatRoom.roomId;

        try {
            return await flatRoom.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<FlatRoom> {
        const flatRoom = await this.getFlatRoom(id);
        await flatRoom.destroy();
        return flatRoom;
    }

    async offset(index: number = 0): Promise<FlatRoomOffset> {
        const flatRooms = await this.flatRoomsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const FlatRoomDto = flatRooms.rows.map(privilege => {
            return new FlatRoomDto(privilege);
        });

        return { rows: FlatRoomDto, count: FlatRoomDto.count };
    }
}
