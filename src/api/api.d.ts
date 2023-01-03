type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export class BaseTbmCad {
    /** createdTime */
    createdTime?: string;

    /** createdUser */
    createdUser?: string;

    /** id */
    id?: number;

    /** pictures */
    pictures?: string;

    /** sign */
    sign?: string;

    /** state */
    state?: number;

    /** type */
    type?: number;

    /** updatedTime */
    updatedTime?: string;

    /** updatedUser */
    updatedUser?: string;

    /** x */
    x?: number;

    /** y */
    y?: number;
  }

  export class CoordinateOfFxy {
    /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
    imageType: number;

    /** 风险源图片 */
    pictures?: Array<string>;

    /** 风险源名称 */
    sign: string;

    /** x */
    x?: number;

    /** y */
    y?: number;
  }

  export class CoordinateOfHuanhao {
    /** 环号 */
    huanhao: number;

    /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
    imageType: number;

    /** x */
    x?: number;

    /** y */
    y?: number;
  }

  export class FxyPic {
    /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
    imageType: number;

    /** 风险源图片 */
    pictures?: Array<string>;
  }

  export class RespResult {
    /** code */
    code?: number;

    /** data */
    data?: object;

    /** message */
    message?: string;
  }
}

declare namespace API {
  /**
   * cad图片数据接口
   */
  export namespace cadImages {
    /**
     * 获取所有风险源坐标
     * /cad/images/getFxy
     */
    export namespace getFxy {
      export class Params {
        /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
        imageType: number;
      }

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 获取所有环号坐标
     * /cad/images/getHuanhao
     */
    export namespace getHuanhao {
      export class Params {
        /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
        imageType: number;
      }

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 保存风险源坐标
     * /cad/images/saveFxy
     */
    export namespace saveFxy {
      export class Params {}

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CoordinateOfFxy,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 保存风险源图片
     * /cad/images/saveFxyPic/{id}
     */
    export namespace saveFxyPic {
      export class Params {
        /** id */
        id: number;
      }

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.FxyPic,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 保存环号坐标
     * /cad/images/saveHuanhao
     */
    export namespace saveHuanhao {
      export class Params {}

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.CoordinateOfHuanhao,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 修改
     * /cad/images/update/{imageType}
     */
    export namespace update {
      export class Params {
        /** imageType */
        imageType: number;
      }

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: defs.BaseTbmCad,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }

    /**
     * 删除数据
     * /cad/images/{id}
     */
    export namespace remove {
      export class Params {
        /** id */
        id: number;
        /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
        imageType: number;
      }

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }
  }

  /**
   * OSS模块
   */
  export namespace oss {
    /**
     * ossToken
     * /manager/auth/oss/token
     */
    export namespace ossToken {
      export class Params {}

      export type Response = object;
      export const init: Response;
      export function request(
        params: Params,
        showErrTip = true,
      ): Promise<object>;
    }

    /**
     * ossUrl
     * /manager/auth/oss/url
     */
    export namespace ossUrl {
      export class Params {}

      export type Response = defs.RespResult;
      export const init: Response;
      export function request(
        params: Params,
        bodyParams: Array<string>,
        showErrTip = true,
      ): Promise<defs.RespResult>;
    }
  }
}
