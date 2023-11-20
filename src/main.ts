import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Pesquisa de preço - Grupo Líder')
    .setDescription('API para projeto de pesquisa de preços do Grupo Líder')
    .setVersion(process.env.APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.APP_API_ROUTE, app, document);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
