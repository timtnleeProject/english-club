<template>
  <v-container class="custom-md-container">
    <v-layout wrap>
      <v-flex xs12 sm6 mb-7>
        <div class="c-headings">
          <div
            v-for="head in headings"
            :key="head.title"
          >
            <span class="c-title">{{ head.title }}</span>
            <span :class="`${head.color}--text`">{{ head.text }}</span>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm6 mb-7 style="white-space:nowrap">
        <h3>Taipei MuCha Library English Club</h3>
        <h3>木柵英文讀書會</h3>
        <h4 v-for="li in links" :key="li.name">
          <v-icon>mdi-menu-right</v-icon>
          <router-link :to="{ name: li.name }">{{ li.text }}</router-link>
        </h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headings: [
        { title: 'E', text: 'njoy readings,', color: 'green' },
        { title: 'N', text: 'urture ideas,', color: 'blue' },
        { title: 'G', text: 'ain knowledge,', color: 'lime' },
        { title: 'L', text: 'ove ourselves,', color: 'deep-orange' },
        { title: 'I', text: 'mprove writings,', color: 'deep-purple' },
        { title: 'S', text: 'hare feelings, and', color: 'green' },
        { title: 'H', text: 'ave fun!', color: 'yellow' }
      ],
      links: [
        { name: 'class', text: 'Class' },
        { name: 'journal', text: 'Journal' },
        { name: 'about', text: 'About' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-headings {
  font-size: 1.5rem;
  text-shadow: 1px 1px 1px black;
  .c-title {
    display: inline-block;
    font-size: 1.5em;
    transform: rotate(7deg);
  }
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.3rem;
}
</style>
