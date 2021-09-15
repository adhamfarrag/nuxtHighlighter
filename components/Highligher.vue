<template>
  <div>
    <transition name="fade">
      <div
        v-show="showMenu"
        :style="{
          left: `${positionX}px`,
          top: `${positionY}px`,
        }"
        class="absolute flex flex-col items-center justify-center duration-500 transform "
        @mousedown.prevent=""
      >
        <div
          @click="highlight()"
          class="flex items-center justify-center w-8 h-8 text-2xl bg-gray-700 rounded-md "
        >
          <IconLink
            class="w-5 h-5 text-white cursor-pointer fill-current  hover:text-blue-300"
          />
        </div>
        <div class="inline-block w-4 -ml-1 overflow-hidden">
          <div
            class="w-2 h-2 mx-auto origin-top-left transform -rotate-45 bg-gray-700  z-100"
          ></div>
        </div>
      </div>
    </transition>
    <slot />
  </div>
</template>

<script>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  wrapProperty,
} from '@nuxtjs/composition-api'
import axios from 'axios'
const useToast = wrapProperty('$toast', false)

export default {
  setup(_, { slots }) {
    const positionX = ref(0)
    const positionY = ref(0)
    const showMenu = ref(false)
    const selectedText = ref('')
    const id = ref('')
    const root = ref(null)
    const toast = useToast()

    const highlightableEl = computed(() => {
      return slots.default()[0]?.elm
    })

    onMounted(() => {
      window.addEventListener('mouseup', createHighlight)
      console.log('here it is', slots)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('mouseup', createHighlight)
    })

    async function copy(s) {
      await navigator.clipboard.writeText(s)
      toast.success('Highlight copied to clipboard!')
      console.log(s)
    }

    function createHighlight() {
      const selection = window.getSelection()
      const selectionRange = selection.getRangeAt(0)
      const startNode = selectionRange.startContainer.parentNode
      const endNode = selectionRange.endContainer.parentNode
      // if (
      //   !startNode.isSameNode(highlightableEl) ||
      //   !startNode.isSameNode(endNode)
      // ) {
      //   showMenu.value = false
      //   return
      // }
      const { x, y, width } = selectionRange.getBoundingClientRect()
      if (!width) {
        showMenu.value = false
        return
      }
      positionX.value = x + width / 2
      positionY.value = y + window.scrollY - 42.5
      selectedText.value = selection.toString()
      showMenu.value = true
    }

    function highlight() {
      const payload = {}
      id.value = Date.now().toString(36) + Math.random().toString(36).substr(2)
      payload[id.value] = selectedText.value

      axios.post('/api/highlight', payload).then(({ data }) => data)

      showMenu.value = false
      const url = `${this.$config.baseURL}/?id=` + this.id
      copy(url)
    }

    return {
      positionX,
      positionY,
      showMenu,
      selectedText,
      id,
      highlightableEl,
      createHighlight,
      highlight,
      root,
      toast,
    }
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
