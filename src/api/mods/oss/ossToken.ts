/**
 * @desc ossToken
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = undefined;

export async function request(params: any, showErrTip = true) {
  return httpService({
    url: '/manager/auth/oss/token',
    params,
    method: 'get',
    showErrTip,
  });
}
