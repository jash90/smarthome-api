import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { FlatRoomController } from "./flatRooms.controller";
import { FlatRoomService } from "./flatRooms.service";
import { flatRoomProviders } from "./flatRooms.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [FlatRoomController],
    providers: [FlatRoomService, ...flatRoomProviders],
    exports: []
})
export class FlatRoomModule {}
