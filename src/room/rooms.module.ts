import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { RoomController } from "./rooms.controller";
import { RoomService } from "./rooms.service";
import { roomProviders } from "./rooms.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [RoomController],
    providers: [RoomService, ...roomProviders],
    exports: []
})
export class RoomModule {}
