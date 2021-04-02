/*
 * @Author: lizhanchao
 * @Date: 2020-12-14 10:48:56
 * @LastEditors: lizhanchao
 * @LastEditTime: 2021-04-01 10:59:49
 * @Description: 工具类库
 */
/**
 * 格式化日期时间格式
 * @param {*} dateTime
 */
const timestampToDateTime = (dateTime, type, separator) => {
  let date = null
  let time = ''
  if (dateTime) {
    date = new Date(dateTime)
  } else {
    date = new Date()
  }
  const year = date.getFullYear()
  const month = addHighZero(date.getMonth() + 1)
  const day = addHighZero(date.getDate())
  const hour = addHighZero(date.getHours())
  const minute = addHighZero(date.getMinutes())
  const second = addHighZero(date.getSeconds())
  if (type === 'time') {
    time = `${year}${separator ? separator : '-'}${month}${
      separator ? separator : '-'
    }${day}  ${hour}:${minute}:${second}`
  } else {
    time = `${year}${separator ? separator : '-'}${month}${
      separator ? separator : '-'
    }${day}`
  }
  return time
}

/**
 * 判断数组元素是否存在存在并返回索引
 * @param {Array}           array   将要遍历的数组
 * @param {String|Number}   value   将要对比的值
 * @param {String}          params  将要对比的参数名
 * @param {String}          type   将要对比的值的类型
 * @return {NUmber}         index  返回索引
 */
const inArray = (array, value, params, type) => {
  let index = -1
  if (Array.isArray(array)) {
    array.some((val, valIndex) => {
      if (params) {
        if (type === 'string') {
          if (val[params] === value) {
            index = valIndex
          }
        } else {
          if (val[params] * 1 === value * 1) {
            index = valIndex
          }
        }
      } else {
        if (type === 'string') {
          if (val === value) {
            index = valIndex
          }
        } else {
          if (val * 1 === value * 1) {
            index = valIndex
          }
        }
      }
      return true
    })
  }
  return index
}
/**
 * 数字字符高位补零
 * @param {Number} num
 */
const addHighZero = num => {
  if (num * 1 < 10) {
    num = '0' + num
  }
  return num
}
export { timestampToDateTime, inArray }
