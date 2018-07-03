import { Observable } from 'rxjs/index';
import { Cookie } from '../interface/cookie.interface';

/**
 * Contract for cookie repositories.
 */
export interface CookieRepository {
  /**
   * Get a specific cookie.
   * @param {string} id
   * @returns {Observable<Cookie>}
   */
  get(id: string): Observable<Cookie>;
}