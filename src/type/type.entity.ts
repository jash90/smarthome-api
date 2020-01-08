import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    ForeignKey,
    HasMany,
    Length,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt
} from "sequelize-typescript";

import { Control } from "../control/control.entity";

@Table({
    tableName: "types"
})
export class Type extends Model<Type> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Unique(true)
    @Column(DataType.TEXT)
    name: string;

    @Column(DataType.TEXT)
    values: string;

    @HasMany(() => Control)
    controls: Control[];

    @CreatedAt
    @Column({ field: "createdAt" })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: "updatedAt" })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: "deletedAt" })
    deletedAt: Date;
}
