<template>
  <div class="columns is-vcentered" id="columns">
    <div class="column" id="auth">
        <img class="logo" src="../assets/logo.png">
        <p id="verify">Bitte gib den 4-stelligen Code ein, den wir dir geschickt haben an:</p>
        <p id="helpernumber">{{ number }}</p>
        <input
          type="number"
          name="sms"
          class="input_field"
          id="sms_auth"
          placeholder="SMS CODE"
          max="9999"
          v-model="smsCode">
        <br>
        <a @click="onceAgain" class="retry">Code erneut senden</a>

        <div class="bottom">
          <div @click="clickBack" class="back">Zurück</div>
          <img @click="sendCode" class="arrow_right" src="../assets/arrow_right.svg" alt="../assets/vinny.jpeg">
        </div>
    </div>
    <div class="column is-half" id="half">
      <p class="motivation">?Motivational Text?</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: "Auth",
  components: {},

  data() {
    return{
      number: null,
      smsCode: '',
      realCode: '',
    }
  },


  methods:{
  clickBack:function(){
    this.$router.push({ path: '/register' });
  },

  sendCode() {
    axios
      .post('', {body: this.smsCode})
      .then(response => (this.realCode = response));
  },

  clickNext() {
    //sendCode...

  },

  onceAgain: function(){
  }
}
};

</script>

<style lang="scss" scoped>

#auth {
  text-align: center;
  padding: 80px;
  height: 100vh;

  .logo {
    margin-top: 30%;
    text-align: left;
  }

  #verify {
    margin-top: 5%;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  #helpernumber {
    margin-top: 2%;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 3px;
  }
  .input_field {
    margin-top: 4%;
    font-size: 18px;
    font-weight: bold;

    width: 232px;
    height: 49px;
    border: 1.6px solid #000000;
    box-sizing: border-box;
    text-align: center;
    padding-left: 16px;
    border-radius: 4px;
    letter-spacing: 10px;
    border-color: #e73454;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  a {
    color: #e73454;
    &:hover {
        color:#ef768c;
    }
  }

  .bottom {
    margin-top: 10%;

    .back {
      float: left;
      cursor: pointer;
      margin-top: 15px;
      &:hover {
        color:gray;
      }
    }
    .arrow_right {
      float: right;
      cursor: pointer;
    }
  }

}

#half {
  background-color: #e73454;
  height: 100vh;

  .motivation {
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 26px;
    margin-top: 50%;
  }
}







</style>
