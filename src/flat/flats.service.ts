import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Flat } from "../flat/flat.entity";
import { FlatDto } from "../flat/dto/flat.dto";
import { CreateFlatDto } from "../flat/dto/create-flat.dto";
import { UpdateFlatDto } from "../flat/dto/update-flat.dto";
import { FlatOffset } from "../flat/dto/flat.offset";

@Injectable()
export class FlatService {
    constructor(
        @Inject("FlatsRepository")
        private readonly flatsRepository: typeof Flat
    ) {}

    async findAll(): Promise<FlatDto[]> {
        const flats = await this.flatsRepository.findAll<Flat>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return flats.map(flat => {
            return new FlatDto(flat);
        });
    }

    async findOne(id: number): Promise<FlatDto> {
        const flat = await this.flatsRepository.findByPk<Flat>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!flat) {
            throw new HttpException("No flat found", HttpStatus.NOT_FOUND);
        }

        return new FlatDto(flat);
    }

    async create(CreateDto: CreateFlatDto): Promise<Flat> {
        const flat = new Flat();

        flat.name = CreateDto.name;
        flat.userId = CreateDto.userId;

        try {
            return await flat.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getFlat(id: number): Promise<Flat> {
        const flat = await this.flatsRepository.findByPk<Flat>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!flat) {
            throw new HttpException("No flat found", HttpStatus.NOT_FOUND);
        }

        return flat;
    }

    async update(id: number, UpdateDto: UpdateFlatDto): Promise<Flat> {
        const flat = await this.getFlat(id);

        flat.name = UpdateDto.name || flat.name;
        flat.userId = UpdateDto.userId || flat.userId;

        try {
            return await flat.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Flat> {
        const flat = await this.getFlat(id);
        await flat.destroy();
        return flat;
    }

    async offset(index: number = 0): Promise<FlatOffset> {
        const flats = await this.flatsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const FlatDto = flats.rows.map(privilege => {
            return new FlatDto(privilege);
        });

        return { rows: FlatDto, count: FlatDto.count };
    }
}
