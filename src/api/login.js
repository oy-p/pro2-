import request from '../axios/index'

export function Login (userName, passWord) {
  const data = {
    userName,
    passWord
  }

  return request ({
    url:'http://rap2api.taobao.org/app/mock/242069/api/login',
    method: 'post',
    data
  })
}