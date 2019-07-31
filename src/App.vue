<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase custom-pointer" @click="goHome">
        <span>english</span>
        <span class="font-weight-light">club</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        :to="{ name: 'journals' }"
      >
        <span class="mr-2">Journal</span>
      </v-btn>
      <v-btn
        text
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
