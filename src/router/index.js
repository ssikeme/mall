import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/views/admin'),
      props: {
        isRegister: false
      }
    },
    {
      path: '/admin/register',
      name: 'register',
      component: () => import('@/views/admin'),
      props: {
        isRegister: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    }
  ]
})
