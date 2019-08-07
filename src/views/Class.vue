<template>
  <v-container class="custom-md-container">
    <h1>Class</h1>
    <tree :tree="classList" to="class-content" historyStoreName="classControl"></tree>
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
    ...mapState(['classList'])
  }
}
</script>
