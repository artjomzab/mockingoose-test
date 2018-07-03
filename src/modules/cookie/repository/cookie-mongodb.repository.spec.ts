import { Model } from 'mongoose';
import mockingoose from 'mockingoose';
import * as mongoose from 'mongoose';
import { Cookie } from '../interface/cookie.interface';
import { CookieMongodbRepository } from './cookie-mongodb.repository';
import { CookieSchema } from '../schema/cookie.schema';

/**
 * CookieMongodbRepository integration test.
 */
describe('CookieMongodbRepository', () => {

  let cookieModel: Model<Cookie>;
  let cookieMongodbRepository: CookieMongodbRepository;

  const mockCookie = {
    _id: '507f191e810c19729de860ea',
    name: '🍪',
  };

  beforeEach(() => {
    cookieModel = mongoose.model('Cookie', CookieSchema);
    mockingoose.Cookie
      .toReturn([mockCookie], 'find');
    cookieMongodbRepository = new CookieMongodbRepository(cookieModel);
  });

  it('should get() the cookie', () => {
    expect.assertions(1);
    cookieMongodbRepository.get(mockCookie._id).subscribe(res => {
      expect(res).toMatchObject(mockCookie);
    });
  });
});