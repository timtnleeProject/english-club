<template>
  <div>
    <v-progress-linear v-if="tree.length === 0" indeterminate></v-progress-linear>
    <v-treeview
      :items="tree"
      :dense="true"
      :open-on-click="true"
      :open="open"
      v-on:update:open="saveOpenStore($event)"
    >
      <template v-slot:label="{ item, open }">
        <div v-if="item.children.length === 0" class="custom-pointer indigo--text" @click="go(item.path)">
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
  </div>
</template>

<script>
export default {
  props: {
    tree: {
      type: Array,
      default: () => []
    },
    historyStoreName: {
      type: String,
      default: undefined
    },
    to: {
      type: String,
      default: 'article'
    }
  },
  computed: {
    open () {
      return this.$store.state[this.historyStoreName]
    }
  },
  methods: {
    go (path) {
      this.$router.push({ name: this.to, params: { pathMatch: path } })
    },
    saveOpenStore (ary) {
      if (!this.historyStoreName) return
      this.$store.commit('set', {
        name: this.historyStoreName,
        value: ary
      })
    }
  }
}
</script>
