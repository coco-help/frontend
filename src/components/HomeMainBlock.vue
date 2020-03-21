<template>
  <div class="HomeMainBlock">
    <div class="landingBlock">
      <a href="tel:+49800 30040020" class="telnum">800 30040020</a>
      <div class="telnum-text">..wenn du hilfe benötigst</div>
      <img
        src="../assets/logo.png"
        alt="COCO"
        class="logo"
      >
      <div class="illustration"></div>
      <div class="infotext"> Hilf zur Risikogruppe gehörigen Nachbarn, ihren Alltag trotz Corona so normal wie möglich zu gestalten.</div>

    </div>
    <HomeSignupBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSignupBlock from "@/components/HomeSignupBlock.vue";
export default {
  name: "HomeMainBlock",
  components: {
    HomeSignupBlock
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.telnum-text{
font-size: 1.5vh;
position: absolute;
right: 3.5vw;
top:5.5vh;
text-align: right ;
float:right;
background: none;
}
.telnum{
color: #e73454;
font-size: 3vh;
position: absolute;
right: 3vw;
top:2vh;
text-align: right ;
float:right;
background: none;
font-weight: 600;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
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
    min-height: 70vh;
    .logo {
      position: absolute;
      left: 5vw;
      top:3vh;
      width: 12vh;
    }
  }
  .signupBlock {
    position: relative;
    width: 100vw;
    min-height: 30vh;
  }
}
.illustration {

  position: absolute;
  background: url('../assets/Illu.png');
  background-position: center center;
  background-size: contain;
  background-repeat:no-repeat;
  top:15vh;
  width: 100%;
  left: 0%;
  height: 23vh;
}
.infotext {
  position: absolute;
  top: 40vh;
  font-weight: 300;
  max-width: 80vw;
  font-size: 3vh;
  margin-left: 10vw;
}
</style>
