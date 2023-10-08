import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  app: z.object({
    environment: z.string(),
    port: z.string().default('5001'),
  }),
  mongo: z.object({
    url: z.string(),
  }),
});

class Config {
  #env: z.infer<typeof envSchema>;

  get() {
    return this.#env;
  }

  public async load() {
    try {
      console.log('Loading env variables');
      this.#loadEnv();
      console.log('Loaded env variables');
    } catch (err: unknown) {
      console.log('Failed to load config', { err });
      throw err;
    }
  }

  #loadEnv() {
    console.log('Loading environment variables');
    const env = {
      app: {
        environment: process.env.ENVIRONMENT,
        port: process.env.PORT,
      },
      mongo: {
        url: process.env.MONGO_URL,
      },
    };

    this.#env = envSchema.parse(env);
  }
}

export const config = new Config();
