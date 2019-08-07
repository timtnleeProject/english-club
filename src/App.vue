<template>
  <v-app>
    <v-navigation-drawer
      app
      :disable-resize-watcher="true"
      :mobile-break-point="9999"
      v-model="open"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            English Club
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item :to="{ name: 'class' }">Class</v-list-item>
            <v-list-item :to="{ name: 'journal' }">Journal</v-list-item>
            <v-list-item to="/about">About</v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="pink white--text">
      <v-toolbar-title class="text-uppercase custom-pointer" @click="goHome">
        <span class="display-2">english</span>
        <span class="font-weight-bold">club</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          text
          color="white"
          :large="true"
          :to="{ name: 'class' }"
        >
          <span class="mr-2 font-italic">Class</span>
        </v-btn>
        <v-btn
          text
          color="white"
          :large="true"
          :to="{ name: 'journal' }"
        >
          <span class="mr-2 font-italic">Journal</span>
        </v-btn>
        <v-btn
          text
          color="white"
          :large="true"
          to="/about"
        >
          <span class="mr-2 font-italic">About</span>
        </v-btn>
      </span>
      <v-app-bar-nav-icon v-else class="white--text" @click="open = true"></v-app-bar-nav-icon>
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
        <v-card-text class="deep-purple--text">臺北市立圖書館木柵分館</v-card-text>
        <v-divider class="c-line"></v-divider>
        <v-card-text class="deep-purple--text">英文讀書會</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      open: false
    }
  },
  created () {
    this.$store.dispatch('getJournal')
    this.$store.dispatch('getClass')
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
$bg_interval: 30s;
@mixin bg1 () {
  background-image: url(~@/assets/images/background.jpg);
  background-position: 45.64% 44.64%;
}
@mixin bg2 () {
  background-image: url(~@/assets/images/birdshome.jpg);
  background-position: 61.64% 28.28%;
}
.c-fullbg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.2;
  animation: bgChange $bg_interval infinite forwards;
}

@keyframes bgChange {
  0%, 40% {
    @include bg1();
  }
  50%, 90% {
    @include bg2();
  }
  100% {
    @include bg1();
  }
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
