<template>
  <div class="HomeSignupBlock">
    <div class="signupBlock">
      <div class="login" @click="login">anmelden</div>
      <span class="postalCode">
        <img src="../assets/house.svg" alt="PLZ" />
        <input
          v-model="zip"
          type="number"
          min="0"
          max="99999"
          maxlength="5"
          @input="clipinput"
          @keyup.enter="register"
          placeholder="Bitte gib deine Postleitzahl an"
        />
      </span>

      <span class="submitButton" @click="register">
        <span>Hilfe anbieten</span>
        <img @click="register" class="arrow_right" src="../assets/arrow_white.svg" />
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
      if(this.zip.length==5){
        this.$router.push({ name: "Register" , query: {zip:this.zip}});
      }
    },
    clipinput: function(){
      this.zip=this.zip.substring(0,5);
    },
    login: function() {
      this.$router.push({ path: "/login"})
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
  .login {
      right: 5vw;
      top:5vh;
      padding:8px;
      position: absolute;
      background-color: white;
      border-radius: 5px;
      font-weight: bold;
      text-align: center;

      &:hover {
        background-color:lightgray;
        cursor: pointer;
      }
    }
  .postalCode {
    position: absolute;
    left: calc((100% - 306px) / 2);
    top: 38vh;
    height: 50px;
    width: 306px;

    img {
      position: absolute;
      height: 22px;
      left: 14px;
      top: 12.4px;
    }
    input {
      position: absolute;
      left: 42px;
      height: 50px;
      width: 70vw;

      &::placeholder {
        font-size: 16px;
      }
    }
  }

  .landingBlock {
    width: 60vw;
    min-height: 70vh;
  }
  .HomeSignupBlock {
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    width: 40vw;
    height: 100vh;
    .submitButton {
      position: absolute;
      color: white;
      top: 45vh;
      left: 0;
      width: 40vw;
      text-align: center;
      line-height: 10vh;
      font-size: 3.5vh;
      &:hover {
        opacity: 75%;
        cursor: pointer;
      }

      img {
        height: 6vh;
        padding-left: 2vh;
        vertical-align: middle;
      }
    }
  }
}
@media (max-width: 768px) {
  .postalCode {
    position: absolute;
    left: 5vw;
    top: 5vh;
    height: 50px;
    width: 90vw;
    img {
      position: absolute;
      height: 22px;
      left: 14px;
      top: 12.4px;
    }
    input {
      position: absolute;
      left: 42px;
      height: 50px;
      width: 70vw;

      &::placeholder {
        margin-top: -1vh;
        font-size: 16px;
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
}
.postalCode {
  position: absolute;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  border: 1.6px solid rgba(255, 255, 255, 0.1);

  input {
    background: none;
    border: none;
    color: white;
    font-size: 18px;

    &::placeholder {
      color: white;
      opacity: 0.7;
    }
  }
}
.HomeSignupBlock {
  background: #e73454;
}
</style>
