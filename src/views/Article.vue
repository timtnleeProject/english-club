<template>
  <v-container class="custom-md-container pb-7">
    <div class="custom-article mb-9" v-html="rawHTML"></div>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div class="mb-9" v-if="sameLevelJournal.length > 0">
      <h4 class="display-1">Other journal{{(sameLevelJournal.length > 1) ? 's' : ''}} in <span class="primary--text">{{fullPath}}</span>:</h4>
      <div
        v-for="jnl in sameLevelJournal"
        :key="jnl.name"
      >
        <router-link class="title" :to="{ name: 'article', params: { pathMatch: jnl.path }}">{{ jnl.name }}</router-link>
      </div>
    </div>
    <router-link class="title indigo--text" :to="{ name: 'journal' }">Back to Journal</router-link>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      loaded: false,
      rawHTML: ''
    }
  },
  created () {
    const { pathMatch } = this.$route.params
    this.fetchArticle(pathMatch)
  },
  beforeRouteUpdate (to, from, next) {
    const { pathMatch } = to.params
    this.fetchArticle(pathMatch).then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['journal', 'domain']),
    fullPath () {
      return this.pathes.join('/')
    },
    journalName () {
      return this.$route.params.pathMatch
        .split('/')
        .filter(d => d.trim() !== '')
        .pop()
    },
    pathes () {
      return this.$route.params.pathMatch
        .split('/')
        .filter(d => d.trim() !== '')
        .slice(0, -1)
    },
    sameLevelJournal () {
      let pointer = this.journal
      for (let i = 0; i < this.pathes.length; i++) {
        const target = pointer.find(d => d.name === this.pathes[i])
        if (!target) return []
        pointer = target.children
      }
      return pointer
        .filter(d => d.isFile)
        .filter(d => d.name !== this.journalName)
    }
  },
  methods: {
    fetchArticle (path) {
      this.loaded = false
      // get .md file
      const filetype = '.html'
      return fetch(`${this.domain}/journal/${path + filetype}`)
        .then(res => {
          const contentType = res.headers.get('content-type')
          const isHTML = /text\/html/.test(contentType)
          return (isHTML)
            ? res.text()
            : Promise.reject(new Error('article not fount'))
        })
        .then(raw => {
          this.rawHTML = raw
          this.loaded = true
        })
        .catch(e => {
          this.$router.push('/not-found')
        })
    }
  }
}
</script>
