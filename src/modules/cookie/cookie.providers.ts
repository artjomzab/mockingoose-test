import { Connection } from 'mongoose';
import { COOKIE_MODEL_TOKEN, COOKIE_REPOSITORY_TOKEN } from './constants';
import { DB_CONNECTION_TOKEN } from '../database/constants';
import { CookieSchema } from './schema/cookie.schema';
import { CookieMongodbRepository } from './repository/cookie-mongodb.repository';

export const cookieProviders: any = [
  {
    provide: COOKIE_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('Cookie', CookieSchema),
    inject: [
      DB_CONNECTION_TOKEN,
    ],
  }, {
    provide: COOKIE_REPOSITORY_TOKEN,
    useClass: CookieMongodbRepository,
  },
];