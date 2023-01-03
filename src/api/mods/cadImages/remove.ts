/**
 * @desc 删除数据
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, showErrTip = true) {
  return httpService({
    url: '/cad/images/{id}',
    params,
    method: 'delete',
    showErrTip,
  });
}
