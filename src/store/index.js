import Vuex from 'vuex'
import Vue from 'vue'
import user from '@/store/modules/user'
import getters from '@/store/getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})
export default store
