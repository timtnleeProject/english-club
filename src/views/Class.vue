<template>
  <v-container class="custom-md-container">
    <h1>Class</h1>
    <tree :tree="sortedClass" to="class-content" historyStoreName="classControl"></tree>
  </v-container>
</template>

<script>
import Tree from '@/components/Tree.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Tree
  },
  computed: {
    ...mapState(['classList']),
    sortedClass () {
      return this.classList.slice().sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      }).map(c => {
        return {
          ...c,
          children: c.children.sort((a, b) => {
            if (a.name < b.name) return 1
            if (a.name > b.name) return -1
            return 0
          })
        }
      })
    }
  }
}
</script>
