import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';

export const setupServer = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();
  app.setGlobalPrefix('api');
  await app.init();

  return app.getHttpServer();
};
