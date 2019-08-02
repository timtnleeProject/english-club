<template>
  <v-container class="custom-md-container pb-7">
    <div class="custom-article mb-9" v-html="rawHTML"></div>
    <v-progress-linear v-if="!loaded" indeterminate></v-progress-linear>
    <div class="mb-9">
      <router-link class="deep-purple--text" :to="{ name: 'class' }">Back to Class</router-link>
    </div>
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
    ...mapState(['class', 'domain'])
  },
  methods: {
    fetchArticle (path) {
      this.loaded = false
      // get .md file
      const filetype = '.html'
      return fetch(`${this.domain}/class/${path + filetype}`)
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

<style lang="scss" scoped>
.c-float {
  float: right;
}
</style>
