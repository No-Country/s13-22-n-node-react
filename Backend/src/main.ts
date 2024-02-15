import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configservice = app.get<ConfigService>(ConfigService);
  const port = configservice.get('PORT') || 3001;

  const config = new DocumentBuilder()
    .setTitle('Food App API')
    .setDescription('This is an API for the Food APP')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
