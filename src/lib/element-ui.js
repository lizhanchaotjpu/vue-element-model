/*
 * @Author: lizhanchao
 * @Date: 2021-03-20 11:16:37
 * @LastEditors: lizhanchao
 * @LastEditTime: 2021-03-20 11:22:24
 * @Description: element-ui按需引入
 */
import Vue from 'vue'
import {
  Button,
  Select,
  MessageBox,
  Message,
  Notification,
  Loading
} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
