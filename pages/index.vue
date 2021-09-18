<template>
  <div
    class="flex flex-col items-center justify-center w-8/12 p-5 mx-auto space-y-3 font-mono text-gray-700 align-middle "
  >
    <div class="flex flex-col mt-20 space-y-3">
      <Highligher>
        <p v-html="applyHighlights"></p>
      </Highligher>
    </div>
  </div>
</template>

<script>
import {
  ref,
  computed,
  useRoute,
  onMounted,
  wrapProperty,
  useContext,
} from '@nuxtjs/composition-api'

import axios from 'axios'
const useScrollTo = wrapProperty('$scrollTo', false)
const useToast = wrapProperty('$toast', false)

export default {
  setup() {
    const highlightedText = ref('')
    const mainText = ref('')
    const route = useRoute()
    const highlightedTextId = computed(() => route.value.query.id)
    const scroll = useScrollTo()
    const { $axios, $config } = useContext()
    const toast = useToast()

    highlightedText.value = ''
    mainText.value =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nisi tellus. Ut gravida, sapien id convallis molestie, lorem mauris venenatis ligula, a pulvinar augue dui id urna. In facilisis tortor sed sem vestibulum accumsan. Cras ac ex tincidunt, efficitur lorem non, pharetra neque. Duis mattis mollis libero. Proin pharetra libero a mauris dapibus, nec cursus sapien congue. Nullam gravida eleifend turpis id dapibus. Suspendisse sed sagittis massa. Nulla elementum pulvinar neque, eu dictum sapien tempus id. Nunc mollis, massa sit amet tempus accumsan, dui arcu semper mi, eget congue elit est quis erat. Vivamus vitae dui quis nisi faucibus ullamcorper. In in ligula quis tellus pretium aliquam sed ac tellus.Nulla lobortis mauris quis felis rutrum, ac posuere ligula gravida. Nullam tempor diam cursus ex commodo, a mattis dolor pharetra. Phasellus placerat, lacus eget euismod auctor, est elit pulvinar nibh, ut mattis odio magna ac sem. Cras commodo nisi finibus elementum faucibus. Curabitur sed purus vitae turpis rhoncus sagittis. Quisque sed sapien id diam congue interdum. Sed elit dui, dapibus id hendrerit eu, porttitor vel risus. Vivamus lacus arcu, condimentum id sem in, molestie ullamcorper nisl. Donec scelerisque velit faucibus sollicitudin dictum. Donec lacus leo, dignissim sed interdum vitae, faucibus in neque. Maecenas eleifend, purus sed posuere semper, nibh lacus rutrum mauris, non placerat orci velit quis lorem. Phasellus eget lacus sit amet ligula laoreet ullamcorper. Phasellus aliquam tristique arcu, eu venenatis tortor congue feugiat. Aenean quis pulvinar tortor. Sed sed lacus placerat, vehicula nulla vitae, viverra elit. Duis tellus odio, iaculis et felis a, volutpat aliquet quam. Cras et consequat risus, vitae venenatis nisi. Praesent tempus at enim sed tristique. Duis vestibulum sagittis nisi nec dictum. Nullam fringilla, odio nec luctus convallis, nisi neque sagittis lectus, at euismod odio purus eget eros. Vestibulum condimentum sed arcu sed vestibulum. Aenean nec efficitur metus. Aenean vitae diam sit amet urna faucibus ullamcorper ut nec massa. Nam eu ligula sit amet massa lacinia finibus. Aenean pellentesque sodales massa, a eleifend purus. Pellentesque sagittis laoreet tortor, vitae pulvinar augue maximus sit amet. In eu vehicula lorem. Praesent non leo pulvinar lorem efficitur ornare. Nam est dui, egestas sed convallis ut, finibus et mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse a lectus leo. Fusce dapibus malesuada ante, at laoreet neque cursus ac. Quisque nunc neque, volutpat euismod pretium quis, placerat quis enim. Donec ultrices in lacus ac interdum. Duis vitae ipsum tempor, dictum ipsum nec, pretium metus. Vestibulum faucibus dapibus eros sit amet finibus. Suspendisse aliquam, risus sed scelerisque placerat, quam turpis ullamcorper justo, nec vestibulum nibh neque sed neque.Vivamus eget dolor et nisl dapibus malesuada ac non tortor. Pellentesque imperdiet nibh ut mauris placerat dictum. Sed lorem magna, malesuada sed imperdiet ac, pulvinar vel eros. Nullam sem mauris, viverra ac augue ut, porta egestas erat. Sed in ultrices elit. Integer molestie faucibus ipsum id congue. Quisque id cursus lorem, a posuere diam. Morbi ut neque posuere, suscipit mi sit amet, placerat dolor. Aliquam posuere nec risus vitae vestibulum. Etiam nisl tortor, vehicula vel nibh quis, vehicula congue elit. Ut consectetur dui ac lorem sodales, at finibus nisl porttitor. Sed tincidunt fringilla eros cursus vulputate. Nam tristique at ex sit amet volutpat. Pellentesque ut maximus erat. Morbi nec orci a risus tempor faucibus.'

    const applyHighlights = computed(() => {
      let str = mainText.value
      let searchText = highlightedText.value
      const regex = new RegExp(searchText, 'gi')
      let text = str
      text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '')

      const newText = text.replace(
        regex,
        `<mark class="highlight" id="${highlightedTextId.value}">$&</mark>`
      )
      str = newText
      return str
    })

    async function detectElement(params) {
      if (!params) return
      else {
        $axios
          .$get(`${$config.baseURL}/api/highlights/${params}/`)
          .then((data) => {
            highlightedText.value = data
            setTimeout(() => {
              scroll(`#${params}`, 900)
            }, 100)
          })
          .catch((err) => {
            toast.error('Highlight was not found!')
          })
      }
    }

    onMounted(() => {
      detectElement(highlightedTextId.value)
    })

    return {
      highlightedText,
      mainText,
      applyHighlights,
      highlightedTextId,
      detectElement,
      scroll,
      axios,
      toast,
    }
  },
}
</script>

<style></style>
