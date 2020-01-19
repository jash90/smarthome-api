import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { setupSwagger } from "./swagger";
import * as cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors());
    app.useGlobalPipes(new ValidationPipe());
    setupSwagger(app);
    await app.listen(3099);
}

bootstrap();
