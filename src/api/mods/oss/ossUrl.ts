/**
 * @desc ossUrl
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, bodyParams: any, showErrTip = true) {
  return httpService({
    url: '/manager/auth/oss/url',
    data: bodyParams,
    method: 'post',
    showErrTip,
  });
}
