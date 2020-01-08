import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { ConditionController } from "./conditions.controller";
import { ConditionService } from "./conditions.service";
import { conditionProviders } from "./conditions.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [ConditionController],
    providers: [ConditionService, ...conditionProviders],
    exports: []
})
export class ConditionModule {}
