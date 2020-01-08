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
import { Room } from "../room/room.entity";

@Table({
    tableName: "roomControls"
})
export class RoomControl extends Model<RoomControl> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Room)
    @Column(DataType.BIGINT)
    roomId: number;

    @ForeignKey(() => Control)
    @Column(DataType.BIGINT)
    controlId: number;

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
