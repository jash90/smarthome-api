import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { TypeController } from "./types.controller";
import { TypeService } from "./types.service";
import { typeProviders } from "./types.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [TypeController],
    providers: [TypeService, ...typeProviders],
    exports: []
})
export class TypeModule {}
