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
    <div class="signupBlock">
      <span class="postalCode">
        <img
          src="../assets/house.svg"
          alt="PLZ"
        >
        <input
          v-model="message"
          type="number"
          min="0"
          max="99999"
          placeholder="Bitte gib deine Postleitzahl an"
        >
        <span class="submitButton">
          <span>Hilfe anbieten</span><img v-on="request" class="arrow_right" src="../assets/arrow_right.svg" alt="../assets/vinny.jpeg">
        </span>
      </span>

    </div>
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
      width: 20vh;
    }
  }
  .signupBlock {
    position: relative;
    width: 100vw;
    min-height: 30vh;
  }
}
.video {
  position: absolute;
  background-color: lightgray;
  width: 80%;
  left: 10%;
  height: 40vw;
}
.infotext {
  position: absolute;
  top: 40vh;
  font-weight: 300;
  max-width: 80vw;
  font-size: 3vh;
  margin-left: 10vw;
}
.postalCode {
  position: absolute;
  left: 5vw;
  top: 5vh;
  height: 8vh;
  border-radius: 5px;
  width: 90vw;
  border: 2px solid white;
  background: #ec617a;

  img {
    position: absolute;
    height: 3vh;
    left: 3vw;
    top: 2.3vh;
  }
  input {
    position: absolute;
    left: 12vw;
    height:8vh;
    width:70vw;
    margin-top: -1px;
    background: none;
    border: none;
    font-size:4vh;
    line-height: 8vh;
    color:white;

    &::placeholder{
      margin-top: -1vh;
      font-size: 2vh;
      line-height: 8vh;
      color:white;
      opacity: 0.7;
    }
  }
}
.signupBlock {
  background: #e73454;
}
</style>
