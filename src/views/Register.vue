<template>
  <div class="register">
    <div class="a c">
      <img
        class="logo"
        src="../assets/logo.png"
        alt="../assets/vinny.jpeg"
        @click="home"
      />
      <div class="main_content">
        <div class="descr">
          Cool, dass du in
          <span class="location_plz">{{ zip }}</span> helfen möchtest. Teil uns noch ein paar Infos über dich mit
        </div>
        <div
          class="error"
          v-if="errors.length != 0"
        >
          <b class="error">Bitte korrigiere den/die folgenden Fehler:</b>
          <ul>
            <li
              class="error"
              :key="error"
              v-for="error in errors"
            >{{ error }}</li>
          </ul>
        </div>
        <div class="inputs">
          <div class="mini">Name</div>
          <input
            type="text"
            name="name"
            v-model="name"
            class="input_field"
            id="input_name"
            placeholder=" Max Mustermann"
            @keyup.enter="request"
          />
          <div class="mini">Nummer</div>
          <input
            type="tel"
            name="number"
            @input="phoneValidator"
            v-model="number"
            class="input_field"
            id="input_number"
            placeholder=" +49 123 456789"
            @keyup.enter="request"
          />
          <div class="mini">E-Mail</div>
          <input
            type="text"
            name="email"
            v-model="email"
            class="input_field"
            id="input_mail"
            placeholder=" ichwillhelfen@gmail.com"
            @keyup.enter="request"
          />
        </div>
        <div class="bottom">
          <div
            class="back"
            @click="$router.go(-1)"
          >Zurück</div>
          <img
            v-if="isDisplayed"
            @click="request"
            v-bind:class="[isDisplayed ? 'arrow_right' : 'arrow_right_vanished']"
            src="../assets/arrow_right.svg"
          />
          <img
            v-else
            v-bind:class="[isDisplayed ? 'arrow_right' : 'arrow_right_vanished']"
            src="../assets/arrow_right.svg"
          />
        </div>
      </div>
    </div>
    <div class="b"></div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Register",
  components: {},

  data() {
    return {
      errors: [],
      name: null,
      number: null,
      email: null,
      zip: null,
      isDisplayed: true
    };
  },

  created() {
    this.zip = this.$route.query.zip;
    //do zip lookup with backend
    //TODO: REMOVE THIS. THIS DOES NOT LOOKUP THE CITY NAME
    //axios
    //.get('https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/phone', {params: { zip: this.zip}});
    //.then(resp => console.log(resp))
    //.catch(err => console.log("Axios-Fehler: " , err))
  },
  methods: {
    toggleDisplay: function() {
      this.isDisplayed = !this.isDisplayed;
    },
    request: function() {
      if (this.checkForm()) {
        axios
          .post(
            "https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/register",
            {
              name: this.name,
              zip: this.$route.query.zip,
              phone: this.number,
              email: this.email
            }
          )
          .then(res => {
            if (res.data.phone) {
              this.$router.push({
                name: "Auth",
                params: { phone: res.data.phone }
              });
            }
          })
          .catch(() => {
              this.login();

          });
          this.toggleDisplay();
      }
    },
    login: function() {
        axios
          .post(
            "https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/login/"+this.number,
            {
            }
          )
          .then(res => {
            if (res.data.message=="user_message_sent") {
              this.$router.push({
                name: "Auth",
                params: { phone: this.number ,
                zip: this.zip }
              });

            }
          });

    },
    checkForm: function() {
      this.errors = [];
      if (
        this.name &&
        this.number &&
        this.email &&
        this.validateEmail(this.email)
      ) {
        return true;
      }
      if (!this.name) {
        this.errors.push("Name benötigt.");
      }
      if (!this.number) {
        this.errors.push("Handynummer benötigt.");
      }
      if (!this.validateEmail(this.email)) {
        this.errors.push("E-Mail ist nicht korrekt.");
      }
    },
    phoneValidator: function() {
      if (this.number.startsWith("0")) {
        this.number = "+49" + this.number.substring(1).replace(" ","");
      }else{
       this.number = this.number.replace(" ","");
      }
    },
    validateEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    home: function() {
      this.$router.push({name:"Home"});
    }
  }
};
</script>

<style lang="scss" scoped>
.c {
  display: flex;
  flex-flow: column;
}

.logo {
  height: 40px;
  margin: 44px 30px 0;
  align-self: start;

  &:hover {
    cursor: pointer;
    opacity: 75%;
  }
}

.main_content {
  margin: 24px 30px 0;

  .descr {
    margin-bottom: 16px;
    word-wrap: break-word;
    font-size: 18px;
    line-height: 125%;

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

    color: #e73454;
  }

  .inputs {
    .mini {
      height: 16px;

      margin-bottom: 5px;

      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #343434;
    }

    .input_field {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      padding-left: 14px;
      margin: auto;
      margin-bottom: 24px;
      display: block;
      font-size: 18px;
      width: 315px;
      height: 50px;
      border: 1.6px solid #000000;
      box-sizing: border-box;
      border-radius: 4px;
    }

    input:focus {
      border: 1.6px solid #e73454;
      box-shadow: 0 0 5px #e73454;
      border-radius: 4px;
      outline: none;
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
      color: #a5a5a5;
      &:hover {
        cursor: pointer;
      }
    }
    .arrow_right {
      float: right;

      &:hover {
        cursor: pointer;
        opacity: 0.75;
      }
    }
    .arrow_right_vanished {
      float:right;
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
}
.b {
  height: 100vh;
  display: none;
  width: 50vw;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #e73454;
}

@media (min-width: 768px) {
  .logo {
    margin-left: 60px;
  }
  .main_content {
    width: 315px;
  }
  .a {
    width: 50vw;
    .main_content {
      position: relative;
      margin: 10vh auto 0;
    }
  }
  .b {
    display: block;
  }
}
</style>