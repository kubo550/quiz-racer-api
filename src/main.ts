import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { config } from './lib/config/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  await config.load();

  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.use(helmet());
  app.enableCors();

  const port = config.get().app.port;
  await app.listen(port);
}

bootstrap().catch((error: Error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server', { error });
});
