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

      <span
        class="submitButton"
        @click="register"
      >
        <span>Hilfe anbieten</span><img
          @click="register"
          class="arrow_right"
          src="../assets/arrow_white.svg"
        >
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSignupBlock",
  data() {
    return {
      zip: null
    };
  },
  methods: {
    register: function() {
      this.$store.commit("inputZIP", this.zip);
      this.$router.push({ path: "/register" });
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
  .postalCode {
    position: absolute;
    left: 10vw;
    top: 30vh;
    height: 8vh;
    width: 20vw;

    img {
      position: absolute;
      height: 3vh;
      left: 1vw;
      top: 2.3vh;
    }
    input {
      position: absolute;
      left: 3.5vw;
      height: 8vh;
      width: 15vw;
      margin-top: -1px;
      font-size: 4vh;
      line-height: 8vh;
      &::placeholder {
        font-size: 0.9vw;
      }
    }
  }

  .landingBlock {
    width: 60vw;
    min-height: 70vh;
  }
  .HomeSignupBlock {
    position: fixed;
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
  }
}
@media (max-width: 768px) {
  .postalCode {
    position: absolute;
    left: 5vw;
    top: 5vh;
    height: 8vh;
    width: 90vw;
    img {
      position: absolute;
      height: 3vh;
      left: 3vw;
      top: 2.3vh;
    }
    input {
      position: absolute;
      left: 12vw;
      height: 8vh;
      width: 70vw;
      margin-top: -1px;
      font-size: 4vh;
      line-height: 8vh;

      &::placeholder {
        margin-top: -1vh;
        font-size: 2vh;
        line-height: 8vh;
      }
    }
  }
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
  border-radius: 5px;
  border: 2px solid white;
  background: #ec617a;
  input {

    background: none;
    border: none;
    color: white;

    &::placeholder {

      color: white;
      opacity: 0.7;
    }
  }
}
.HomeSignupBlock {
  background: #e73454;
  .submitButton {
    position: absolute;
    color: white;
    top: 15vh;
    left: 0;
    width: 100vw;
    text-align: center;
    line-height: 10vh;
    font-size: 3.5vh;
    img {
      height: 6vh;
      padding-left: 2vh;
      vertical-align: middle;
    }
  }
}
</style>
