import router from './index'
import store from '@/store/index'

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireAuth) {
    if (store.getters.userSessionInfo) {
      next()
    } else {
      alert('dfd')
      router.push('/admin/login')
    }
  } else {
    next()
  }
})
