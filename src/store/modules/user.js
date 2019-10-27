const state = {
  userSessionInfo: null
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
