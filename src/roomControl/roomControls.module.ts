import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { RoomControlController } from "./roomControls.controller";
import { RoomControlService } from "./roomControls.service";
import { roomControlProviders } from "./roomControls.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [RoomControlController],
    providers: [RoomControlService, ...roomControlProviders],
    exports: []
})
export class RoomControlModule {}
