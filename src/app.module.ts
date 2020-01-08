import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { SharedModule } from "./shared/shared.module";
import { ConditionModule } from "./condition/conditions.module";
import { ControlModule } from "./control/controls.module";
import { FlatModule } from "./flat/flats.module";
import { RoomModule } from "./room/rooms.module";
import { TypeModule } from "./type/types.module";
@Module({
    imports: [
        UsersModule,
        SharedModule,
        ConditionModule,
        ControlModule,
        FlatModule,
        RoomModule,
        TypeModule
    ],

    controllers: [],
    providers: []
})
export class AppModule {}
