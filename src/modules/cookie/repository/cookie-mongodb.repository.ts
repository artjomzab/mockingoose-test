import { Inject, Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { Model } from 'mongoose';
import { Cookie } from '../interface/cookie.interface';
import { CookieRepository } from './cookie.repository';

/**
 * Implementation of [CookieRepository] for MongoDb.
 */
@Injectable()
export class CookieMongodbRepository implements CookieRepository {

  constructor(
    @Inject('COOKIE_MODEL_TOKEN') private readonly cookieModel: Model<Cookie>,
  ) {
  }

  get(id: string): Observable<Cookie> {
    return from(this.cookieModel.findById(id).exec());
  }
}