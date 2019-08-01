<template>
  <v-app>
    <v-app-bar app class="cyan white--text">
      <v-toolbar-title class="text-uppercase custom-pointer" @click="goHome">
        <span class="display-2">english</span>
        <span class="font-weight-light">club</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="white"
        :large="true"
        to="/class"
      >
        <span class="mr-2">Class</span>
      </v-btn>
      <v-btn
        text
        color="white"
        :large="true"
        :to="{ name: 'journal' }"
      >
        <span class="mr-2">Journal</span>
      </v-btn>
      <v-btn
        text
        color="white"
        :large="true"
        to="/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <div class="c-fullbg"></div>
      <router-view  class="c-elevate"/>
    </v-content>
    <v-footer
      app
      :absolute="true"
      class="footer"
    >
      <v-card
        flat
        width="100%"
        class="transparent text-center py-3"
      >
        <v-card-text>Taipei MuCha Library English club</v-card-text>
        <v-divider class="c-line"></v-divider>
        <v-card-text>木柵英文讀書會</v-card-text>
      </v-card>
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

<style lang="scss" scoped>
.c-fullbg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/images/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.2;
}

.c-elevate {
  position: relative;
}
.c-line {
  background-color: rgba(255, 255, 255, 0.7);
}
.c-footer-text {
  font-size: 1.3rem;
}
</style>
