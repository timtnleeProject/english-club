<template>
  <v-app>
    <v-app-bar app class="cyan white--text">
      <v-toolbar-title class="headline text-uppercase custom-pointer" @click="goHome">
        <span>english</span>
        <span class="font-weight-light">club</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="white"
        :to="{ name: 'journals' }"
      >
        <span class="mr-2">Journal</span>
      </v-btn>
      <v-btn
        text
        color="white"
        to="/class"
      >
        <span class="mr-2">Class</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getJournal')
    this.ghPagesSpaRedirect()
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    ghPagesSpaRedirect () {
      const { p } = this.$route.query
      if (p) this.$router.push(p)
    }
  }
}
</script>
