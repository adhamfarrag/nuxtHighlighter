<template>
  <div>
    <transition name="fade">
      <div
        v-show="showMenu"
        :style="{
          left: `${x}px`,
          top: `${y}px`,
        }"
        class="absolute flex flex-col items-center justify-center duration-500 transform "
        @mousedown.prevent=""
      >
        <div
          @click="highlight()"
          class="flex items-center justify-center w-8 h-8 text-2xl bg-gray-700 rounded-md "
        >
          <IconLink
            class="w-5 h-5 text-white cursor-pointer fill-current hover:text-blue-300"
          />
        </div>
        <div class="inline-block w-4 -ml-1 overflow-hidden">
          <div
            class="w-2 h-2 mx-auto origin-top-left transform -rotate-45 bg-gray-700 "
          ></div>
        </div>
      </div>
    </transition>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      showMenu: false,
      selectedText: '',
      id: '',
    }
  },
  computed: {
    highlightableEl() {
      return this.$slots.default[0].elm
    },
  },
  mounted() {
    window.addEventListener('mouseup', this.createHighlight)
  },

  beforeDestroy() {
    window.removeEventListener('mouseup', this.createHighlight)
  },
  methods: {
    createHighlight() {
      const selection = window.getSelection()
      const selectionRange = selection.getRangeAt(0)
      const startNode = selectionRange.startContainer.parentNode
      const endNode = selectionRange.endContainer.parentNode
      if (
        !startNode.isSameNode(this.highlightableEl) ||
        !startNode.isSameNode(endNode)
      ) {
        this.showMenu = false
        return
      }
      const { x, y, width } = selectionRange.getBoundingClientRect()
      if (!width) {
        this.showMenu = false
        return
      }
      this.x = x + width / 2
      this.y = y + window.scrollY - 42.5
      this.selectedText = selection.toString()
      this.showMenu = true
    },
    highlight() {
      const payload = {}
      this.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
      payload[this.id] = this.selectedText

      this.$axios.$post('/api/highlight', payload).then(({ data }) => data)

      this.showMenu = false
      const url = `${this.$config.baseURL}/?id=` + this.id
      this.copy(url)
    },
    async copy(s) {
      await navigator.clipboard.writeText(s)
      this.$toast.success('Highlight copied to clipboard!')
    },
  },
}
</script>

<style scoped>
::-moz-selection {
  @apply bg-blue-200  text-gray-500;
}

::selection {
  @apply bg-blue-200  text-gray-500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
