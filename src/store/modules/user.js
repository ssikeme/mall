const state = {
  userSessionInfo: {
    id: null,
    username: '',
    nickname: '',
    avatar: '',
    isSeller: null
  }
}
const mutations = {
  setUserSessionInfo: (state, userSessionInfo) => {
    state.userSessionInfo = userSessionInfo
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
