<template>
  <div class="HomeMainBlock">
    <div class="landingBlock">
      <a href="tel:+1 956 247 4513" class="telnum">+1 956 247 4513</a>
      <div class="telnum-text">..wenn du Hilfe benötigst<br><span style="font-size: 1vh;opacity:0.5">Deutsche nummer folgt</span></div>
      <a href="https://karmakurier.org/">
      <img src="../assets/logo.png" alt="COCO" class="logo" />
      </a>

      <div class="illustration"></div>
      <div
        class="infotext"
      >Hilf zur Risikogruppe gehörigen Nachbarn, ihren Alltag trotz Corona so normal wie möglich zu gestalten.</div>
    </div>
    <HomeSignupBlock />
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
  .logo{
    width: auto!important;
  }
  .karma{
    position: absolute;
    top:50px;
    left:30px;
    color:gray;
    font-weight: 700;
    text-align: left;
    font-size:12px;
    .karmalogo{
      display: inline-block;
      height: 55px !important;
    }

  }
.telnum-text {
  font-size: 1.5vh;
  position: absolute;
  right: 3.5vw;
  top: 5.5vh;
  text-align: right;
  float: right;
  background: none;
}
.telnum {
  color: #e73454;
  font-size: 3vh;
  position: absolute;
  right: 3vw;
  top: 2vh;
  text-align: right;
  float: right;
  background: none;
  font-weight: 600;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
.illustration {
  position: absolute;
  background: url("../assets/Illu.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  top: 15vh;
  width: 100%;
  left: 10%;
  height: 33vh;
}
.infotext {
  position: absolute;
  top: 40vh;
  font-weight: 300;
  max-width: 80vw;
  font-size: 3vh;
  margin-left: 10vw;
}
@media (min-width: 768px) {
  .HomeMainBlock {
    position: relative;
    min-height: 90vh;
  }
  .logo {
    position: absolute;
    left: 20px;
    top: 10px;
    height: 45px;
  }
  .landingBlock {
    position: relative;
    width: 60vw;
  }
  .infotext {
    position: absolute;
    top: 50vh;
    font-weight: 300;
    max-width: 30vw;
    font-size: 3vh;
    margin-left: 5vw;
  }
}
@media (max-width: 768px) {



  .logo {
    position: absolute;
    left: 30px;
    top: 20px;
    height: 35px;
  }
  .landingBlock {
    position: relative;
    width: 100vw;
    min-height: 70vh;
    .logo {
      position: absolute;
      left: 5vw;
      top: 3vh;
      width: 12vh;
    }
    .illustration {
      height: 23vh;
      left: 5%;
    }
  }
  .signupBlock {
    position: relative;
    width: 100vw;
    min-height: 30vh;
  }
}
</style>
