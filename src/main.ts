import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(14046);

  Logger.log(
    `🚀  Server is listening on port ${14046}`,
    'Bootstrap',
  );
}
bootstrap();
