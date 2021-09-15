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

export default {
  setup() {
    const highlightedText = ref('')
    const mainText = ref('')
    const route = useRoute()
    const highlightedTextId = computed(() => route.value.query.id)
    const scroll = useScrollTo()
    const { $axios, $config } = useContext()

    highlightedText.value = ''
    mainText.value =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium PlutoPay maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti sssssssss quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.'

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
        $axios.$get(`${$config.baseURL}/api/highlights`).then((data) => {
          highlightedText.value = data.highlights.find(
            (x) => Object.keys(x)[0] == params
          )[params]
        })
        setTimeout(() => {
          scroll(`#${highlightedTextId.value}`, 900)
        }, 100)
      }
    }

    onMounted(() => {
      console.log('now')
      detectElement(highlightedTextId.value)
      console.log('fired')
    })

    return {
      highlightedText,
      mainText,
      applyHighlights,
      highlightedTextId,
      detectElement,
      scroll,
      axios,
    }
  },
}
</script>

<style></style>
