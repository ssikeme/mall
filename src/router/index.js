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
      },
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/admin/register',
      name: 'register',
      component: () => import('@/views/admin'),
      props: {
        isRegister: true
      },
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/product'),
      meta: {
        requireAuth: false
      }
    }, {
      path: '/navigate',
      name: 'navigate',
      component: () => import('@/views/navigate'),
      meta: {
        requireAuth: false
      }
    }
  ]
})
