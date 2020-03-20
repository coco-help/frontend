<template>
  <div class="home">
    <img alt="Coco logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome HHHHIIII to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
