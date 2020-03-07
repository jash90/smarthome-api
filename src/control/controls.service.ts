import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Control } from "../control/control.entity";
import { ControlDto } from "../control/dto/control.dto";
import { CreateControlDto } from "../control/dto/create-control.dto";
import { UpdateControlDto } from "../control/dto/update-control.dto";
import { ControlOffset } from "../control/dto/control.offset";

@Injectable()
export class ControlService {
    constructor(
        @Inject("ControlsRepository")
        private readonly controlsRepository: typeof Control
    ) {}

    async findAll(userId: number): Promise<ControlDto[]> {
        const controls = await this.controlsRepository.findAll<Control>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            where: { userId }
        });
        return controls.map(control => {
            return new ControlDto(control);
        });
    }

    async findOne(id: number): Promise<ControlDto> {
        const control = await this.controlsRepository.findByPk<Control>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!control) {
            throw new HttpException("No control found", HttpStatus.NOT_FOUND);
        }

        return new ControlDto(control);
    }

    async create(
        CreateDto: CreateControlDto,
        userId: number
    ): Promise<Control> {
        const control = new Control();

        control.name = CreateDto.name;
        control.value = CreateDto.value;
        control.typeId = CreateDto.typeId;
        control.userId = userId;
        control.roomId = CreateDto.roomId;

        try {
            return await control.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getControl(id: number, userId: number): Promise<Control> {
        const control = await this.controlsRepository.findByPk<Control>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
            where: { userId }
        });
        if (!control) {
            throw new HttpException("No control found", HttpStatus.NOT_FOUND);
        }

        return control;
    }

    async update(
        id: number,
        UpdateDto: UpdateControlDto,
        userId: number
    ): Promise<Control> {
        const control = await this.getControl(id, userId);

        control.name = UpdateDto.name || control.name;
        control.value = UpdateDto.value || control.value;
        control.typeId = UpdateDto.typeId || control.typeId;
        control.userId = userId || control.userId;
        control.roomId = UpdateDto.roomId || control.roomId;

        try {
            return await control.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number, userId: number): Promise<Control> {
        const control = await this.getControl(id, userId);
        await control.destroy();
        return control;
    }

    async offset(index: number = 0): Promise<ControlOffset> {
        const controls = await this.controlsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const ControlDto = controls.rows.map(privilege => {
            return new ControlDto(privilege);
        });

        return { rows: ControlDto, count: ControlDto.count };
    }
}
