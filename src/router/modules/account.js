const accountRoute = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () =>
      import(/* webpackChunkName: "account" */ '@/views/Login.vue')
  }
]
export default accountRoute
