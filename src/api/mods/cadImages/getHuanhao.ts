/**
 * @desc 获取所有环号坐标
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, showErrTip = true) {
  return httpService({
    url: '/cad/images/getHuanhao',
    params,
    method: 'get',
    showErrTip,
  });
}
