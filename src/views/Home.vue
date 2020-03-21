<template>
  <div class="home">
    <HomeMainBlock msg="Welcome HHHHIIII to Your Vue.js App"/>
    <p>More info on <a href="https://devpost.com/software/corona-connect">https://devpost.com/software/corona-connect</a></p>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMainBlock from '@/components/HomeMainBlock.vue'

export default {
  name: 'Home',
  components: {
    HomeMainBlock
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding:0px;
}

</style>