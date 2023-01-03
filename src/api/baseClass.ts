export class BaseTbmCad {
  /** createdTime */
  createdTime = '';

  /** createdUser */
  createdUser = '';

  /** id */
  id = undefined;

  /** pictures */
  pictures = '';

  /** sign */
  sign = '';

  /** state */
  state = undefined;

  /** type */
  type = undefined;

  /** updatedTime */
  updatedTime = '';

  /** updatedUser */
  updatedUser = '';

  /** x */
  x = undefined;

  /** y */
  y = undefined;
}

export class CoordinateOfFxy {
  /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
  imageType = undefined;

  /** 风险源图片 */
  pictures = [];

  /** 风险源名称 */
  sign = '';

  /** x */
  x = undefined;

  /** y */
  y = undefined;
}

export class CoordinateOfHuanhao {
  /** 环号 */
  huanhao = undefined;

  /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
  imageType = undefined;

  /** x */
  x = undefined;

  /** y */
  y = undefined;
}

export class FxyPic {
  /** 类型图：1：纵面图-左线。2：纵面图-右线。3：平面图-左线。4：平面图-左线。 */
  imageType = undefined;

  /** 风险源图片 */
  pictures = [];
}

export class RespResult {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** message */
  message = '';
}
