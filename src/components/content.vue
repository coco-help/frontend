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

    </div>
    <div class="video">
      <iframe  src="https://www.youtube.com/embed/LqPrL1DDkUo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    width: 50%;
    margin:5vh;
    @media (max-width: 768px) {
      display: none;
  }
  }
  .slogan {
    margin-top: 10%;
    margin-left: 10%;
    text-align: left;
    font-weight: 300;
    max-width: 70%;
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
  .video{
    iframe{
      width:30vh;
      height:20vh;
      display: inline-block;
    }
    width: 100%;
    text-align: center;
  }

}



</style>
