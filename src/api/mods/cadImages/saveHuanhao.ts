/**
 * @desc 保存环号坐标
 */

import * as defs from '../../baseClass';
import httpService from '@/util/http.service';

export class Params {}
export const init = new defs.RespResult();

export async function request(params: any, bodyParams: any, showErrTip = true) {
  return httpService({
    url: '/cad/images/saveHuanhao',
    data: bodyParams,
    method: 'post',
    showErrTip,
  });
}
