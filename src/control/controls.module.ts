import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { ControlController } from "./controls.controller";
import { ControlService } from "./controls.service";
import { controlProviders } from "./controls.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [ControlController],
    providers: [ControlService, ...controlProviders],
    exports: []
})
export class ControlModule {}
