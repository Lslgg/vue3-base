/**
 * @desc 修改
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, bodyParams: any, showErrTip = true) {
  return httpService({
    url: '/cad/images/update/{imageType}',
    data: bodyParams,
    method: 'post',
    showErrTip,
  });
}
