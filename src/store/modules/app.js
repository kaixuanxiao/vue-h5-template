const state = {
  catchList: ['List'], // 页面组件缓存清单
  userName: ''
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  keepAlive(state, name) {
    if (!state.catchList.includes(name)) {
      state.catchList.push(name)
    }
  },
  noKeepAlive(state, name) {
    const index = state.catchList.indexOf(name)
    if (index > -1) {
      state.catchList.splice(index, 1)
    }
  }
}
const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  keepAlive({ commit }, name) {
    commit('keepAlive', name)
  },
  noKeepAlive({ commit }, name) {
    commit('noKeepAlive', name)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
