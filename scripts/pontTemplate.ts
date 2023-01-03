
import * as Pont from 'pont-engine'
import { CodeGenerator, Interface } from 'pont-engine'

export default class MyGenerator extends CodeGenerator {
  constructor() {
    super()
  }

  /** 获取接口实现内容的代码 */
  public getInterfaceContent(inter: Interface) {
    const bodyParmas = inter.getBodyParamsCode()
    const requestParams = bodyParmas ? `params:any, bodyParams:any` : `params:any`

    return `
        /**
         * @desc ${inter.description}
         */

        import * as defs from '../../baseClass'
        import httpService from '@/util/http.service'

        export class Params {}
        export const init = ${inter.response.initialValue}

        export async function request(${requestParams}, showErrTip = true) {
        return httpService({
            url: '${inter.path}',
            ${bodyParmas ? 'data: bodyParams' : 'params'},
            method: '${inter.method}',
            showErrTip
        });
    }`
  }

  public getInterfaceContentInDeclaration(inter) {
    const bodyParams = inter.getBodyParamsCode()
    const requestParams = bodyParams ? `params: Params, bodyParams: ${bodyParams}` : `params: Params`
    return `
      export ${inter.getParamsCode('Params', this.surrounding)}

      export type Response = ${inter.responseType};
      export const init: Response;
      export function request(${requestParams}, showErrTip = true): Promise<${inter.responseType}>;
    `
  }
}
