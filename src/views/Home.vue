<template>
  <div class="home">
    <HomeMainBlock/>
    <FusionBanner class='banner'/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMainBlock from '@/components/HomeMainBlock.vue'
import Footer from '@/components/footer.vue'
import Content from '@/components/content.vue'
import FusionBanner from '@/components/FusionBanner.vue'

export default {
  name: 'Home',
  components: {
    HomeMainBlock,
    Footer,
    Content,
    FusionBanner
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .home {
    width: 60vw;
  }
  .banner {
    margin-left: 5vw;
  }
}
@media (max-width: 768px) {
  .home {
    width: 100vw;
  }
}
.home{
  position: relative;
  padding:0px;
}


</style>