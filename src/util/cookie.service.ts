/* eslint-disable require-jsdoc */
import Cookies from 'js-cookie'
import SingletonClass from './single.class'
const UserToken = 'User-Token'

export class CookieService extends SingletonClass {
  /**
  * 构造方法
  * @return {any}
  */
  static ins(): CookieService {
    return super.ins() as CookieService
  }

  getUserToken() {
    return Cookies.get(UserToken)
  }

  setUserToken(token: any) {
    return Cookies.set(UserToken, token)
  }

  removeUserToken() {
    return Cookies.remove(UserToken)
  }
}

