import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { MongoMemoryServer } from 'mongodb-memory-server';

@Injectable()
export class MongoMemoryConfigService implements OnModuleDestroy {
  private mongod: MongoMemoryServer;

  async getUri(): Promise<string> {
    this.mongod = await MongoMemoryServer.create();
    return this.mongod.getUri();
  }

  async onModuleDestroy() {
    await this.mongod.stop();
  }
}
