<template>
  <div class="columns is-vcentered" id="columns">
    <div class="column" id="auth">
      <img class="logo" src="../assets/logo.png" />
      <p id="verify">Bitte gib den 4-stelligen Code ein, den wir dir geschickt haben an:</p>
      <b id="helperphone">{{ phone }}</b>
      <input
        type="phone"
        name="sms"
        class="input_field"
        id="sms_auth"
        placeholder="SMS CODE"
        max="9999"
        v-model="smsCode"
      />
      <br />
      <a @click="onceAgain" class="retry">Code erneut senden</a>
      <p class="notApproved">{{ notApproved }}</p>

      <div class="bottom">
        <div @click="clickBack" class="back">Zurück</div>
        <img
          @click="clickNext"
          class="arrow_right"
          src="../assets/arrow_right.svg"
          alt="../assets/vinny.jpeg"
        />
      </div>
    </div>
    <div class="column is-half" id="half">
      <p class="motivation">?Motivational Text?</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Auth",
  components: {},

  data() {
    return {
      phone: '',
      smsCode: "",
      jwt: null,
      approved: false,
      notApproved: ""
    };
  },
  mounted() {
    this.phone = this.$route.params.phone;
    this.smsCode = this.$route.query.code;
  },

  methods: {
    clickBack: function() {
      this.$router.push({ path: "/register" });
    },

    sendCode() {
      axios
        .get(`https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/verify/${this.phone}?code=${this.smsCode}`)
        .then(res => {
          if(res.data.jwt){
            this.$router.push({ path: "/h" });
          }else{
             this.notApproved = "Der eingegebene Code ist falsch!";
          }
          }).catch(()=> this.notApproved = "Der eingegebene Code ist falsch!");
    },

    clickNext() {
      this.sendCode();
    },

    onceAgain: function() {
      //send SMS Code again?
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 0;
  padding: 0;
}

#auth {
  margin: 0 30px;
  padding: 0;
  height: 100vh;

  .logo {
    margin-top: 44px;
    height: 40px;
    text-align: left;
  }

  #verify {
    margin-top: 24px;
    font-size: 18px;
  }
  #helperphone {
    margin-top: 2%;
    font-weight: bold;
    font-size: 18px;
  }
  .input_field {
    margin: 40px auto 18px;
    font-size: 24px;
    font-weight: bold;

    width: 232px;
    height: 60px;
    border: none;
    box-sizing: border-box;
    text-align: center;
    border-radius: 4px;
    letter-spacing: 10px;
    background: #f5f5f5;
    border-radius: 4px;

    &:focus {
      border: 1.6px solid #e73454;
      box-shadow: 0 0 5px #e73454;
      border-radius: 4px;
      outline: none;
    }
    &::placeholder {
      font-size: 20px;
    }
  }
  input[type="phone"]::-webkit-inner-spin-button,
  input[type="phone"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .retry {
    margin-top: 18px;
  }

  a {
    color: #e73454;
    &:hover {
      color: #ef768c;
    }
  }
  .notApproved {
    color: red;
    font-weight: bold;
  }

  .bottom {
    margin-top: 10%;

    .back {
      float: left;
      cursor: pointer;
      margin-top: 15px;
      font-size: 16px;
      color: #868686;
      &:hover {
        color: gray;
      }
    }
    img.arrow_right {
      float: right;
      cursor: pointer;
      &:hover {
        opacity: 75%;
      }
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

@media (max-width: 768px) {
  #auth {
    height: auto;
  }
  #half {
    display: none;
  }
}
</style>
