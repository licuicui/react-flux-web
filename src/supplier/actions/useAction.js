import cookie from 'Util/cookieUtil'
import { hashHistory } from 'react-router'

const auth = {
  /**
   * 用户登录
   * @param {Object} data
   */
  login: (data, callback) => {
    const userInfo = {
      token: '123123',
      username: data.username
    };

    if (data.username === '13402802006' && data.password === 'romens') {
      cookie.setItem('token', userInfo.token)
      cookie.setItem('username', userInfo.username)
      hashHistory.push('/seller/home')
    } else {
      callback('账号与密码不符合')
    }
  },

  /**
   * 用户退出
   * @param {String} username
   */
  logout: () => {
    cookie.clearCookie()
    hashHistory.push('/login')
  },
}

export default auth
