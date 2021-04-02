/*
 * @Author: lizhanchao
 * @Date: 2021-04-01 11:11:51
 * @LastEditors: lizhanchao
 * @LastEditTime: 2021-04-01 11:14:23
 * @Description: 账户模块相关API
 */
import { post, get } from '@/lib/axios'
/**
 * 登录
 * @param {*} params
 */
const login = params => post('/login', params)
/**
 * 获取账户信息
 * @param {*} params
 */
const getAccountInfo = params => get('/account/info', params)

export { login, getAccountInfo }
