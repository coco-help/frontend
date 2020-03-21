<template>
  <div class="HomeMainBlock">
    <div class="landingBlock">
      <img
        src="../assets/logo.png"
        alt="COCO"
        class="logo"
      >
      <div class="video"></div>
      <div class="infotext"> Hilf zur Risikogruppe gehörigen Nachbarn, ihren Alltag trotz Corona so normal wie möglich zu gestalten.</div>

    </div>
    <div class="signupBlock"></div>
  </div>
</template>

<script>
export default {
  name: "HomeMainBlock",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 768px) {
  .landingBlock {
    width: 60vw;
    min-height: 70vh;
  }
  .signupBlock {
    min-width: 10px;
    min-height: 10px;
  }
}
@media (max-width: 768px) {
  .landingBlock {
    position: relative;
    width: 100vw;
    min-height: 65vh;
    .logo {
      width: 20vh;
    }
  }
  .signupBlock {
    position: relative;
    width: 100vw;
    min-height: 35vh;
  }
}
.video{
  position: absolute;
  background-color: lightgray;
  width:80%;
  left:10%;
  height: 40vw;
}
.infotext{
  font-weight: 300;
  max-width: 80vw;
  font-size: 3vh;
  margin-left:10vw;
}
.signupBlock {
  background: #e73454;
}
</style>
