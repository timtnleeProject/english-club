import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: (process.env.NODE_ENV === 'production')
      ? 'https://timtnleeproject.github.io/english-club'
      : '',
    journal: [],
    journalControl: [],
    classList: [],
    classControl: []
  },
  mutations: {
    set (state, payload) {
      const { name, value } = payload
      state[name] = value
    }
  },
  actions: {
    getJournal (context) {
      fetch(`${context.state.domain}/journal.json`)
        .then(res => res.json())
        .then(tree => {
          context.commit('set', {
            name: 'journal',
            value: tree
          })
        })
    },
    getClass (context) {
      fetch(`${context.state.domain}/class.json`)
        .then(res => res.json())
        .then(tree => {
          context.commit('set', {
            name: 'classList',
            value: tree
          })
        })
    }
  }
})
