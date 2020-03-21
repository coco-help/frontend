<template>
  <div class="columns">
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
          v-model="smsCode">
        <br>
        <a class="retry">Code erneut senden</a>
        <p class="back">Zurück</p>
        <img @click="clickNext" class="arrow_right" src="../assets/arrow_right.svg" alt="../assets/vinny.jpeg">
    </div>
    <div class="column is-half" id="half">
      <p class="motivation">?Motivational Text?</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Auth",
  components: {},

  data() {
    return{
      number: null,
      smsCode: ''
    }
  },

  methods:{
  clickNext: function (){
    //sendCode(this.smsCode);
  }
}
};






</script>

<style lang="scss" scope>

#auth {
  text-align: center;
}
#verify {
  height: 21px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
#helpernumber {
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 3px;
}
.input_field {
  margin-top: 20px;
  font-size: 18px;
  width: 232px;
  height: 49px;
  border: 1.6px solid #000000;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  padding-left: 10px;
  border-radius: 4px;
  letter-spacing: 10px;
  border-color: #e73454;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.motivation {
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 26px;
  margin-top: 50%;
}
a {
  color: #e73454;
}
#half {
  background-color: #e73454;
}

</style>}
