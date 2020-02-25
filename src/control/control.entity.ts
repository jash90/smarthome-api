import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';
import { Room } from '../room/room.entity';
import { Type } from '../type/type.entity';
import { User } from '../users/user.entity';

@Table({
    tableName: "controls"
})
export class Control extends Model<Control> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Unique(true)
    @Column(DataType.TEXT)
    name: string;

    @Column(DataType.TEXT)
    value: string;

    @ForeignKey(() => Type)
    @Column(DataType.BIGINT)
    typeId: number;

    @BelongsTo(() => Type)
    type: Control;

    @ForeignKey(() => User)
    @Column(DataType.BIGINT)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Room)
    @Column(DataType.BIGINT)
    roomId?: number;

    @BelongsTo(() => Room)
    room?: Room;

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
