import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { MongoMemoryConfigService } from './mongo-memory-config.service';
import { config } from '../../lib/config/config';

export async function setupServer() {
  process.env.ENVIRONMENT = 'test';
  process.env.MONGO_URL = await new MongoMemoryConfigService().getUri();

  await config.load();

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();
  app.setGlobalPrefix('api');
  await app.init();

  return app.getHttpServer();
}
