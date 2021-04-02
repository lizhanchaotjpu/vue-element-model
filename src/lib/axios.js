/*
 * @Author: lizhanchao
 * @Date: 2020-12-01 11:37:13
 * @LastEditors: lizhanchao
 * @LastEditTime: 2021-04-02 13:32:59
 * @Description: axios
 */
import axios from 'axios'
import store from 'store'
import qs from 'qs'
import router from '../router'
import { Notification } from 'element-ui'
import { invalidCode, tokenName, timeOut, apiServer } from '@/config/config'

// axios 配置
// 默认超时时间
axios.defaults.timeout = timeOut
// post请求数据格式
axios.defaults.headers.post['Content-Type'] = apiServer.contentType
// 设置认证信息
axios.defaults.headers[tokenName] = store.get(tokenName) || ''
// 数据接口域名统一配置
axios.defaults.baseURL = apiServer[process.env.NODE_ENV || 'development']
// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data) {
      if (response.data.code === invalidCode) {
        store.remove(tokenName)
        router.push('/login')
      }
    }
    return response
  },
  error => {
    let data = null
    if (error.response) {
      data = error.response.data
      const status = error.response.status
      Notification.error({
        title: '出错了',
        message: `${status}--${data.msg}`
      })
    } else {
      Notification.error({
        title: '出错了',
        message: '网络错误'
      })
    }
    return Promise.reject(data || error)
  }
)

/**
 * get 请求方法
 * @param {*} url
 * @param {*} params
 */
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} params
 */
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post 请求方法，发送数据格式 json
 * @param {*} url
 * @param {*} params
 */
export const upload = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
