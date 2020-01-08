import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { RoomControl } from "../roomControl/roomControl.entity";
import { RoomControlDto } from "../roomControl/dto/roomControl.dto";
import { CreateRoomControlDto } from "../roomControl/dto/create-roomControl.dto";
import { UpdateRoomControlDto } from "../roomControl/dto/update-roomControl.dto";
import { RoomControlOffset } from "../roomControl/dto/roomControl.offset";

@Injectable()
export class RoomControlService {
    constructor(
        @Inject("RoomControlsRepository")
        private readonly roomControlsRepository: typeof RoomControl
    ) {}

    async findAll(): Promise<RoomControlDto[]> {
        const roomControls = await this.roomControlsRepository.findAll<
            RoomControl
        >({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return roomControls.map(roomControl => {
            return new RoomControlDto(roomControl);
        });
    }

    async findOne(id: number): Promise<RoomControlDto> {
        const roomControl = await this.roomControlsRepository.findByPk<
            RoomControl
        >(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!roomControl) {
            throw new HttpException(
                "No roomControl found",
                HttpStatus.NOT_FOUND
            );
        }

        return new RoomControlDto(roomControl);
    }

    async create(CreateDto: CreateRoomControlDto): Promise<RoomControl> {
        const roomControl = new RoomControl();

        roomControl.roomId = CreateDto.roomId;
        roomControl.controlId = CreateDto.controlId;

        try {
            return await roomControl.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getRoomControl(id: number): Promise<RoomControl> {
        const roomControl = await this.roomControlsRepository.findByPk<
            RoomControl
        >(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!roomControl) {
            throw new HttpException(
                "No roomControl found",
                HttpStatus.NOT_FOUND
            );
        }

        return roomControl;
    }

    async update(
        id: number,
        UpdateDto: UpdateRoomControlDto
    ): Promise<RoomControl> {
        const roomControl = await this.getRoomControl(id);

        roomControl.roomId = UpdateDto.roomId || roomControl.roomId;
        roomControl.controlId = UpdateDto.controlId || roomControl.controlId;

        try {
            return await roomControl.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<RoomControl> {
        const roomControl = await this.getRoomControl(id);
        await roomControl.destroy();
        return roomControl;
    }

    async offset(index: number = 0): Promise<RoomControlOffset> {
        const roomControls = await this.roomControlsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const RoomControlDto = roomControls.rows.map(privilege => {
            return new RoomControlDto(privilege);
        });

        return { rows: RoomControlDto, count: RoomControlDto.count };
    }
}
