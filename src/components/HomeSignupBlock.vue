<template>
  <div class="HomeSignupBlock">
    <div class="signupBlock">
      <span class="postalCode">
        <img
          src="../assets/house.svg"
          alt="PLZ"
        >
        <input
          v-model="zip"
          type="number"
          min="0"
          max="99999"
          placeholder="Bitte gib deine Postleitzahl an"
        >

      </span>

      <span class="submitButton" @click="register">
          <span>Hilfe anbieten</span><img v-on="request" class="arrow_right" src="../assets/arrow_white.svg">
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSignupBlock",
  props: {
    zip: Number
  },
  methods:{
    register:function(){
      this.$router.push({ path: '/register' , params: { zip: this.zip } });
    }
  }
};
</script>

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
.HomeSignupBlock {
  background: #e73454;
  .submitButton{
    position: absolute;
    color: white;
    top:15vh;
    left:0;
    width: 100vw;
    text-align: center;
    line-height: 10vh;
    font-size: 3.5vh;
    img{
      height: 6vh;
      padding-left: 2vh;
      vertical-align:middle
    }
  }
}
</style>
