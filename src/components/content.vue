<template>
  <div class="content">
    <div>
      <img
        src=""
        alt=""
      >
    </div>
    <div class="slogan">
      <p>Ob einkaufen, Zuhören oder mit dem Hund Gassi gehen – wir verbinden dich telefonisch mit einer hilfesuchenden Person in deiner Umgebung. </p>
    </div>
    <div class="journey">
      <a href="">user journey / ablauf</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Content",
  components: {},
  data() {
    return {};
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.content {
  height: 100vh;

  img {
    margin-top: 5vh;
  }
  .slogan {
    margin-top: 5vh;
    text-align: left;
    margin-right: 40vh;
    margin-left: 40vh;
    font-weight: 400;
    max-width: 30vw;
    font-size: 15vh;
  }
  .journey {
    margin-top: 30vh;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 3vh;
  }
}


</style>
