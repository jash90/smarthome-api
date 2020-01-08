import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Condition } from "../condition/condition.entity";
import { ConditionDto } from "../condition/dto/condition.dto";
import { CreateConditionDto } from "../condition/dto/create-condition.dto";
import { UpdateConditionDto } from "../condition/dto/update-condition.dto";
import { ConditionOffset } from "../condition/dto/condition.offset";

@Injectable()
export class ConditionService {
    constructor(
        @Inject("ConditionsRepository")
        private readonly conditionsRepository: typeof Condition
    ) {}

    async findAll(): Promise<ConditionDto[]> {
        const conditions = await this.conditionsRepository.findAll<Condition>({
            include: [],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });
        return conditions.map(condition => {
            return new ConditionDto(condition);
        });
    }

    async findOne(id: number): Promise<ConditionDto> {
        const condition = await this.conditionsRepository.findByPk<Condition>(
            id,
            {
                include: [],
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
            }
        );
        if (!condition) {
            throw new HttpException("No condition found", HttpStatus.NOT_FOUND);
        }

        return new ConditionDto(condition);
    }

    async create(CreateDto: CreateConditionDto): Promise<Condition> {
        const condition = new Condition();

        condition.name = CreateDto.name;
        condition.value = CreateDto.value;
        condition.userId = CreateDto.userId;

        try {
            return await condition.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private async getCondition(id: number): Promise<Condition> {
        const condition = await this.conditionsRepository.findByPk<Condition>(
            id,
            {
                include: [],
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
            }
        );
        if (!condition) {
            throw new HttpException("No condition found", HttpStatus.NOT_FOUND);
        }

        return condition;
    }

    async update(
        id: number,
        UpdateDto: UpdateConditionDto
    ): Promise<Condition> {
        const condition = await this.getCondition(id);

        condition.name = UpdateDto.name || condition.name;
        condition.value = UpdateDto.value || condition.value;
        condition.userId = UpdateDto.userId || condition.userId;

        try {
            return await condition.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<Condition> {
        const condition = await this.getCondition(id);
        await condition.destroy();
        return condition;
    }

    async offset(index: number = 0): Promise<ConditionOffset> {
        const conditions = await this.conditionsRepository.findAndCountAll({
            include: [],
            limit: 100,
            offset: index * 100,
            order: ["id"],
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        });

        const ConditionDto = conditions.rows.map(privilege => {
            return new ConditionDto(privilege);
        });

        return { rows: ConditionDto, count: ConditionDto.count };
    }
}
