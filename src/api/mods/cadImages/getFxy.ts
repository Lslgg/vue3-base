/**
 * @desc 获取所有风险源坐标
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, showErrTip = true) {
  return httpService({
    url: '/cad/images/getFxy',
    params,
    method: 'get',
    showErrTip,
  });
}
