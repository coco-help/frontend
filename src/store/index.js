import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zip: null
  },
  getters: {
    getZIP(state) {
      return state.zip
    }
  },
  mutations: {
    inputZIP(state, zip) {
      state.zip = zip
    }
  },
  actions: {
  },
  modules: {
  }
})
