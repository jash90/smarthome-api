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

import { Room } from "../room/room.entity";
import { Flat } from "../flat/flat.entity";

@Table({
    tableName: "flatRooms"
})
export class FlatRoom extends Model<FlatRoom> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Flat)
    @Column(DataType.BIGINT)
    flatId: number;

    @BelongsTo(() => Flat)
    flat: Flat;

    @ForeignKey(() => Room)
    @Column(DataType.BIGINT)
    roomId: number;

    @BelongsTo(() => Room)
    room: Room;

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
