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

import { User } from "../users/user.entity";
import { Flat } from "src/flat/flat.entity";
import { Control } from "src/control/control.entity";

@Table({
    tableName: "rooms"
})
export class Room extends Model<Room> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Unique(true)
    @Column(DataType.TEXT)
    name: string;

    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Flat)
    @Column(DataType.BIGINT)
    flatId: number;

    @BelongsTo(() => Flat)
    flat: Flat;

    @HasMany(()=>Control)
    controls:Control[];

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
