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

export default {
  data() {
    return {
      text: null,
      mainText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium PlutoPay maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quos omnis voluptates obcaecati, ipsam, delectus, ea numquam amet dolore corrupti sssssssss quia quidem modi quis vero? Omnis dolore accusantium maiores quisquam.',
    }
  },
  async created() {
    if (this.$route.query.id) {
      console.log(this.$route.query.id)
      await this.$axios.$get('/api/highlights').then((data) => {
        this.text = data.highlights.find(
          (x) => Object.keys(x)[0] == this.$route.query.id
        )[this.$route.query.id]
      })
      let highligtedElement = this.$route.query.id
      this.$scrollTo(`#${highligtedElement}`, 900)
    }      
  },
  computed: {
    applyHighlights() {
      let str = this.mainText
      let searchText = this.text
      const regex = new RegExp(searchText, 'gi')
      let text = str
      text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '')
      const newText = text.replace(
        regex,
        `<mark class="highlight" id="${this.$route.query.id}">$&</mark>`
      )
      str = newText
      return str
    },
  },
}
</script>

<style></style>
