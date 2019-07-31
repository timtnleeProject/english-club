import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: (process.env.NODE_ENV === 'production')
      ? 'https://timtnleeproject.github.io/english-club'
      : '',
    journal: []
  },
  mutations: {
    set (state, payload) {
      const { name, value } = payload
      state[name] = value
    }
  },
  actions: {
    getJournal (context) {
      fetch(`${context.state.domain}/menu.json`)
        .then(res => res.json())
        .then(tree => {
          context.commit('set', {
            name: 'journal',
            value: tree
          })
        })
    }
  }
})
