import request from '@/utils/request'

export function login (loginParam) {
  return request({
    url: '/admin/login',
    method: 'POST',
    data: loginParam
  })
}

export function register (registerParam) {
  return request({
    url: '/admin/register',
    method: 'POST',
    data: registerParam
  })
}
