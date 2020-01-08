import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { FlatController } from "./flats.controller";
import { FlatService } from "./flats.service";
import { flatProviders } from "./flats.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [FlatController],
    providers: [FlatService, ...flatProviders],
    exports: []
})
export class FlatModule {}
