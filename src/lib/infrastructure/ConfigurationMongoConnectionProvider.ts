import mongoose from 'mongoose';
import { config } from '../config/config';
import { logger } from '../logger/logger';

export class ConfigurationMongoConnectionProvider {
  static async get() {
    if (!mongoose.connection.readyState) {
      logger.debug(
        'ConfigurationMongoConnectionProvider - creating connection',
      );
      await mongoose.connect(config.get().mongo.url, {
        dbName: config.get().mongo.dbName,
      });
    }

    logger.debug('ConfigurationMongoConnectionProvider - using connection');
    return mongoose.connection;
  }

  static async close() {
    await mongoose.connection.close();
  }
}
