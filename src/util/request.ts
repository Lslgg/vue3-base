import axios from 'axios'
import { CookieService } from './cookie.service'
import { Utilts } from './utilts'

// create an axios instance
axios.defaults.withCredentials = true
const service = axios.create({
  baseURL: `${import.meta.env.VITE_API_DOMAIN}`, // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 100000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = CookieService.ins().getUserToken() || ''
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // eslint-disable-next-line valid-jsdoc
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  (response) => {
    const res = response.data
    // 401:非法的token; Token 过期了;
    if (response.status === 303 || response.status === 304 ||
      response.status === 305 || res.code === 303 || res.code === 304 || res.code === 305) {
      Utilts.ins().confirm({
        title: '确认',
        content: '你已被登出，可以取消继续留在该页面，或者重新登录',
        okText: '重新登录',
        okCallBack: () => {
          CookieService.ins().removeUserToken()
        }
      })
    } else if (response.status === 300 || res.code === 300) {
      Utilts.ins().message('传递参数异常', 'error')
    } else if (response.status === 400 || res.code === 400) {
      Utilts.ins().message('请求地址异常', 'error')
    } else if (response.status === 500 || res.code === 500) {
      let msg = '服务器错误,请联系管理员'
      if (res.msg && res.msg.length > 0 && res.msg !== 'success') {
        msg = res.msg
      }
      Utilts.ins().message(msg, 'error')
    } else {
      if (res.code === 301) {
        window.location.href = '/admin/login'
      } else {
        if (response.headers.token) {
          CookieService.ins().setUserToken(response.headers.token)
          localStorage.setItem('token', response.headers.token)
        }
        return res
      }
    }
  },
  (error) => {
    if (error.response.status === 305 || error.response.status === 304) {
      if (window.location.href.indexOf('home') <= -1) {
        // window.location.href = "/home";
      }
    }
    return Promise.reject(error)
  }
)

export default service
