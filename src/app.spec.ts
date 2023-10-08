import supertest from 'supertest';
import { setupServer } from './test/utils/setup-server';

describe('AppController', () => {
  it('health-check', async () => {
    const app = await setupServer();

    const response = await supertest(app).get('/api/health-check');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'running' });
  });
});
