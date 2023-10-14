import supertest from 'supertest';
import { setupServer } from '../test/utils/setup-server';
import { MongoMemoryConfigService } from '../test/utils/mongo-memory-config.service';

describe('modules', () => {
  let mongoMemoryConfigService: MongoMemoryConfigService;

  beforeAll(async () => {
    mongoMemoryConfigService = new MongoMemoryConfigService();
    process.env.MONGO_DB_NAME = 'uek';
    process.env.MONGO_URL = await mongoMemoryConfigService.getUri();
  });

  afterAll(async () => {
    await mongoMemoryConfigService.onModuleDestroy();
  });

  it('should return modules from db', async () => {
    const app = await setupServer();

    const response = await fetchModules(app);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

async function fetchModules(app) {
  return supertest(app).get('/api/modules');
}
