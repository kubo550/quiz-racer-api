import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { config } from './lib/config/config';

async function bootstrap() {
  await config.load();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const port = config.get().app.port;
  await app.listen(port);
}

bootstrap().catch((error: Error) => {
  console.error(`Failed to start server: ${error.message}`);
});
