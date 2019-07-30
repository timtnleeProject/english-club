<template>
  <div>J</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
    fetch('/menu.txt')
      .then(res => res.text())
      .then(raw => {
        this.parseMenu(raw)
      })
  },
  methods: {
    parseMenu (raw) {
      const lines = raw.split('\n')
      const flat = []
      const tree = []

      let pointerIndexes = [ 0 ]

      const getDepth = n => n / 2

      lines.forEach((line, index) => {
        const whiteSpaces = line.match(/ /g) || []
        const spaces = whiteSpaces.length
        const lineDepth = getDepth(spaces)
        if (lineDepth > pointerIndexes.length) pointerIndexes.push(0)
        else if (lineDepth < pointerIndexes.length) pointerIndexes = pointerIndexes.slice(0, lineDepth)
        if (pointerIndexes[lineDepth] === undefined) pointerIndexes[lineDepth] = 0
        else pointerIndexes[lineDepth] += 1
        console.log(lineDepth, pointerIndexes)
      })
    }
  }
}
</script>
