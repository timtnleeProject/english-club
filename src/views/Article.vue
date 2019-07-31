<template>
  <v-container>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <vue-markdown :source="rawMarkdown" class="custom-article"></vue-markdown>
    <div class="mb-5" v-if="sameLevelJournal.length > 0">
      <h4 class="display-1">Other journal{{(sameLevelJournal.length > 1) ? 's' : ''}} in <span class="blue--text">{{fullPath}}</span>:</h4>
      <div
        v-for="jnl in sameLevelJournal"
        :key="jnl.name"
      >
        <router-link class="title" :to="`/journal${jnl.path}`">{{ jnl.name }}</router-link>
      </div>
    </div>
    <router-link class="title" to="/journal">Back to Journal</router-link>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      loaded: false,
      rawMarkdown: ''
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
      return this.$route.params.pathMatch.split('/').pop()
    },
    pathes () {
      return this.$route.params.pathMatch.split('/').slice(0, -1)
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
      return fetch(`${this.domain}/journal/${path}.md`)
        .then(res => {
          const contentType = res.headers.get('content-type')
          const isMarkdown = /text\/markdown/.test(contentType)
          return (isMarkdown)
            ? res.text()
            : Promise.reject(new Error('article not fount'))
        })
        .then(raw => {
          this.rawMarkdown = raw
          this.loaded = true
        })
        .catch(e => {
          this.$router.push('/not-found')
        })
    }
  }
}
</script>
