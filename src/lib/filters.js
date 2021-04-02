/*
 * @Author: lizhanchao
 * @Date: 2020-12-14 11:15:36
 * @LastEditors: lizhanchao
 * @LastEditTime: 2021-04-01 11:00:09
 * @Description: 全局过滤器
 */
import { application } from '@/config/config'
/**
 * 过滤数据是否有效，无效数据占位
 * @param {*} val
 */
const isValid = val => {
  let value = ''
  if (val.trim()) {
    value = val
  } else {
    value = application.placeholder
  }
  return value
}
export { isValid }
