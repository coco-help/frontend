<template>
  <div class="home">
    <HomeMainBlock/>
    <p>More info on <a href="https://devpost.com/software/corona-connect">https://devpost.com/software/corona-connect</a></p>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMainBlock from '@/components/HomeMainBlock.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    HomeMainBlock,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .home {
    width: 60vw;
  }
}
.home{
  padding:0px;
}

</style>