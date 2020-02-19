import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.entity";
import { ConfigService } from "./../shared/config/config.service";
import { Control } from "../control/control.entity";
import { Condition } from "../condition/condition.entity";
import { Flat } from "../flat/flat.entity";
import { Room } from "../room/room.entity";
import { Type } from "../type/type.entity";

export const databaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize(configService.sequelizeOrmConfig);
            sequelize.addModels([User, Condition, Flat, Room, Control, Type]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService]
    }
];
