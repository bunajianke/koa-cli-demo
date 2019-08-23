import request from '@/utils/http'

// 登录
export const userLogin = info => request.post('/users/login', info)

// 注册
export const userReg = info => request.post('/users/regist', info)