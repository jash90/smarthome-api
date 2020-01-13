import {
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    IsEmail,
    Model,
    Table,
    Unique,
    UpdatedAt,
    BelongsTo,
    ForeignKey,
    HasMany,
    Max,
    Min,
    AutoIncrement,
    PrimaryKey
} from "sequelize-typescript";

import { Control } from "../control/control.entity";
import { Flat } from "../flat/flat.entity";
import { Room } from "../room/room.entity";
import { Condition } from "../condition/condition.entity";

@Table({
    tableName: "users"
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @Unique(true)
    @Column({ type: DataType.TEXT, validate: { isEmail: true } })
    email: string;

    @Column(DataType.TEXT)
    password: string;

    @Column({ field: "firstname" })
    firstname: string;

    @Column({ field: "lastname" })
    lastname: string;

    @HasMany(() => Control)
    controls: Control[];

    @HasMany(() => Flat)
    flats: Flat[];

    @HasMany(() => Room)
    rooms: Room[];

    @HasMany(() => Condition)
    conditions: Condition[];

    @CreatedAt
    @Column({ field: "created_at" })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: "updated_at" })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: "deleted_at" })
    deletedAt: Date;
}
