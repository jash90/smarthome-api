import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Room } from "../room/room.entity";
import { RoomDto } from "../room/dto/room.dto";
import { CreateRoomDto } from "../room/dto/create-room.dto";
import { UpdateRoomDto } from "../room/dto/update-room.dto";
import { RoomOffset } from "../room/dto/room.offset";

@Injectable()
export class RoomService {
    constructor(
        @Inject("RoomsRepository")
        private readonly roomsRepository: typeof Room
    ) {}

    async findAll(userId:number): Promise<RoomDto[]> {
        const rooms = await this.roomsRepository.findAll<Room>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            where:{userId}
        });
        return rooms.map(room => {
            return new RoomDto(room);
        });
    }

    async findOne(id: number): Promise<RoomDto> {
        const room = await this.roomsRepository.findByPk<Room>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!room) {
            throw new HttpException("No room found", HttpStatus.NOT_FOUND);
        }

        return new RoomDto(room);
    }

    async create(CreateDto: CreateRoomDto, userId:number): Promise<Room> {
        const room = new Room();

        room.name = CreateDto.name;
        room.userId = userId;

        try {
            return await room.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getRoom(id: number): Promise<Room> {
        const room = await this.roomsRepository.findByPk<Room>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!room) {
            throw new HttpException("No room found", HttpStatus.NOT_FOUND);
        }

        return room;
    }

    async update(id: number, UpdateDto: UpdateRoomDto): Promise<Room> {
        const room = await this.getRoom(id);

        room.name = UpdateDto.name || room.name;
        room.userId = UpdateDto.userId || room.userId;

        try {
            return await room.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Room> {
        const room = await this.getRoom(id);
        await room.destroy();
        return room;
    }

    async offset(index: number = 0): Promise<RoomOffset> {
        const rooms = await this.roomsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const RoomDto = rooms.rows.map(privilege => {
            return new RoomDto(privilege);
        });

        return { rows: RoomDto, count: RoomDto.count };
    }
}
