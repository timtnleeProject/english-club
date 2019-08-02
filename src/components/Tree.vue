<template>
  <v-treeview
      :items="tree"
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
</template>

<script>
export default {
  props: {
    tree: {
      type: Array,
      default: () => []
    },
    to: {
      type: String,
      default: 'article'
    }
  },
  methods: {
    go (path) {
      this.$router.push({ name: this.to, params: { pathMatch: path } })
    }
  }
}
</script>
