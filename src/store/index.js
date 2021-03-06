import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api-call'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'Pranjul Kumar',
    userList: []
  },
  getters: {
    username (state) {
      return state.username
    },
    userList (state) {
      return state.userList
    }
  },
  mutations: {
    setUsers (state, data) {
      state.userList = data
    }
  },
  actions: {
    getUsers ({ commit }) {
      api.getUsers((response) => {
        commit('setUsers', response.data)
      })
    }
  },
  modules: {
  }
})

export default store
