import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { setupSwagger } from "./swagger";
import cors from "cors";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    setupSwagger(app);
    app.use(cors());
    await app.listen(3099);
}

bootstrap();
