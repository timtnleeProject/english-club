<template>
  <v-container>
    <h1>Journal</h1>
    <v-treeview
      :items="journal"
      :dense="true"
      :open-on-click="true"
    >
      <template v-slot:label="{ item, open }">
        <div v-if="item.children.length === 0" class="custom-pointer blue--text" @click="go(item.path)">
          {{ item.name }}
        </div>
        <span v-else>
          <v-icon>
            {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          {{ item.name }}
        </span>
      </template>
    </v-treeview>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState(['journal'])
  },
  methods: {
    go (path) {
      this.$router.push({ name: 'article', params: { pathMatch: path } })
    }
  }
}
</script>
