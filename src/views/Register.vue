<template>
  <div class="register">
    <img class="logo" src="../assets/logo.png" alt="../assets/vinny.jpeg">
    <div class="main_content">
      <div class="descr">Cool, dass du in <span class="location_plz">{{ city }} - {{ zip }}</span> helfen möchtest. Teil uns noch ein paar Infos über dich mit</div>
      <p class="error" v-if="errors.length != 0">
        <b class="error">Bitte korrigiere den/die folgenden Fehler:</b>
        <ul>
          <li class="error" :key="error" v-for="error in errors">{{ error }}</li>
        </ul>
    </p>
      <div class="inputs">
        <input type="text" name="name" v-model="name"  class="input_field" id="input_name" placeholder="Name">
        <input type="number" name="number" v-model="number"  class="input_field" id="input_number" placeholder="Handynummer">
        <input type="text" name="email" v-model="email"  class="input_field" id="input_mail" placeholder="E-Mail">
      </div>
      <div class="bottom">
        <div class="back">Zurück</div>
        <img @click="request" class="arrow_right" src="../assets/arrow_right.svg" alt="../assets/vinny.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'Register',
  components: {
  },

  data() {
    return {
      errors: [],
      name: null,
      number: null,
      email: null,
      city: null,
      zip: null
    }
  },

  mounted() {
    this.zip = this.$store.getters.getZIP
    //do zip lookup with backend
    axios
      .get('https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/phone', {params: { zip: this.zip}})
      .then(response => (this.city = response))
      .catch(err => console.log("Axios-Fehler: " , err))
  },
  methods: {
    request: function () {
      if (this.checkForm()) {
        //send post request
      }
    },

    checkForm: function () {
          this.errors = [];
          if (this.name && this.number && this.email && this.validateEmail(this.email)) {
            return true;
          }
          if (!this.name) {
            this.errors.push('Name benötigt.');
          }
          if (!this.number) {
            this.errors.push('Handynummer benötigt.');
          }
          if (!this.validateEmail(this.email)) {
            this.errors.push('E-Mail ist nicht korrekt.');
          }
        },

    validateEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
}

</script>

<style lang="scss" scoped>

.logo {
  width: 82px;
  height: 33px;
}

.main_content {
  margin: auto;
  width: 315px;


  .descr {
    margin-bottom: 37px;
    word-wrap:break-word;

    .location_plz {
      font-weight: 600;
    }
  }

  .error {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    text-align: center;

    color: #E73454;
  }




  .inputs{
    width: 50%;

    .input_field {
      margin: auto;
      margin-bottom: 39px;
      display: block;
      font-size: 18px;
      width: 315px;
      height: 50px;
      border: 1.6px solid #000000;
      box-sizing: border-box;
      border-radius: 4px;
    }

    input:focus {
      outline: 3px solid #E73454;
      box-sizing: border-box;
      border: none;
      filter: blur(0.1px);
    }
  }

  .bottom {
    display: inline;

    .back {
      margin-top: 15px;
      float: left;
      width: 55px;
      height: 19px;
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #A5A5A5;
    }
    .arrow_right {
      float: right;
    }
  }

}

</style>