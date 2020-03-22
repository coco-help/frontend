<template>
  <div class="content">
    <div >
      <img
        src="../assets/oma.png"
        alt=""
      >
    </div>
      <p class="slogan">Ob einkaufen, Zuhören oder mit dem Hund Gassi gehen – wir verbinden dich telefonisch mit einer hilfesuchenden Person in deiner Umgebung. </p>
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
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
  .slogan {
    margin-top: 10vh;
    margin-left: 10vh;
    text-align: left;
    font-weight: 300;
    max-width: 30vw;
    font-size: 3vh;
  }
  .journey {
    margin-top: 15vh;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 3vh;
    letter-spacing: 0.5vh;
  }
}


</style>
