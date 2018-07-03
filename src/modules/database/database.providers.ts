import * as mongoose from 'mongoose';
import { DB_CONNECTION_TOKEN } from './constants';

/**
 * Create a singleton DB instance.
 */
export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(process.env.DB_MONGO_URI, {});
    },
  },
];