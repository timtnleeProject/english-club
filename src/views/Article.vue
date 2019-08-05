<template>
  <v-container class="custom-md-container pb-7">
    <div class="custom-article mb-9" v-html="rawHTML"></div>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <v-layout class="mb-9" wrap>
      <v-flex xs12 sm6>
        <router-link class="deep-purple--text" :to="{ name: 'journal' }">Back to Journal</router-link>
      </v-flex>
      <v-flex v-if="nextJournal" xs12 sm6>
        <router-link
          class="deep-purple--text"
          :to="{ name: 'article', params: { pathMatch: nextJournal.path }}"
        >
          {{ nextJournal.name }}
        </router-link>
      </v-flex>
    </v-layout>
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
    nextJournal () {
      let pointer = this.journal
      for (let i = 0; i < this.pathes.length; i++) {
        const target = pointer.find(d => d.name === this.pathes[i])
        if (!target) return []
        pointer = target.children
      }

      const files = pointer.filter(d => d.isFile)
      const idx = files.findIndex(d => d.name === this.journalName)
      return (idx === -1)
        ? undefined
        : files[idx + 1]
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
