import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle("SmartHome API")
        .setLicense("MIT License", "https://opensource.org/licenses/MIT")
        .setContactEmail("email")
        .setDescription("API Documentation")
        .setSchemes("https","http")
        .setVersion("1.1")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("documentation", app, document);
}
