import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Type } from "../type/type.entity";
import { TypeDto } from "../type/dto/type.dto";
import { CreateTypeDto } from "../type/dto/create-type.dto";
import { UpdateTypeDto } from "../type/dto/update-type.dto";
import { TypeOffset } from "../type/dto/type.offset";

@Injectable()
export class TypeService {
    constructor(
        @Inject("TypesRepository")
        private readonly typesRepository: typeof Type
    ) {}

    async findAll(): Promise<TypeDto[]> {
        const types = await this.typesRepository.findAll<Type>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return types.map(type => {
            return new TypeDto(type);
        });
    }

    async findOne(id: number): Promise<TypeDto> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!type) {
            throw new HttpException("No type found", HttpStatus.NOT_FOUND);
        }

        return new TypeDto(type);
    }

    async create(CreateDto: CreateTypeDto): Promise<Type> {
        const type = new Type();

        type.name = CreateDto.name;
        type.values = CreateDto.values;
        type.icon = CreateDto.icon;
        type.group = CreateDto.group;

        try {
            return await type.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getType(id: number): Promise<Type> {
        const type = await this.typesRepository.findByPk<Type>(id, {
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        if (!type) {
            throw new HttpException("No type found", HttpStatus.NOT_FOUND);
        }

        return type;
    }

    async update(id: number, UpdateDto: UpdateTypeDto): Promise<Type> {
        const type = await this.getType(id);

        type.name = UpdateDto.name || type.name;
        type.values = UpdateDto.values || type.values;
        type.icon = UpdateDto.icon || type.icon;
        type.group = UpdateDto.group || type.group;

        try {
            return await type.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Type> {
        const type = await this.getType(id);
        await type.destroy();
        return type;
    }

    async offset(index: number = 0): Promise<TypeOffset> {
        const types = await this.typesRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const TypeDto = types.rows.map(privilege => {
            return new TypeDto(privilege);
        });

        return { rows: TypeDto, count: TypeDto.count };
    }
}
