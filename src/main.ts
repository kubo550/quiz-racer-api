import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { config } from './lib/config/config';
import { logger } from './lib/logger/logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  await config.load();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger,
    },
  );

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port = config.get().app.port;
  await app.listen(port);
}

bootstrap().catch((error: Error) => {
  logger.error('Failed to start server', { error });
});
