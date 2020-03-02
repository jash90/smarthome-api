import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { SharedModule } from "./shared/shared.module";
import { ControlModule } from "./control/controls.module";
import { RoomModule } from "./room/rooms.module";
import { TypeModule } from "./type/types.module";
@Module({
    imports: [
        UsersModule,
        SharedModule,
        ControlModule,
        RoomModule,
        TypeModule
    ],

    controllers: [],
    providers: []
})
export class AppModule {}
