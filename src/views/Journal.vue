<template>
  <v-container class="custom-md-container">
    <h1>Journal</h1>
    <tree :tree="journal"></tree>
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
    ...mapState(['journal'])
  }
}
</script>
