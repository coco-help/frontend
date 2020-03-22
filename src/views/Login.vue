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
          Willkommen zurück! Gib deine Nummer ein um weiter zu helfen.
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
          <div class="mini">Nummer</div>
          <input
            type="tel"
            name="number"
            @input="phoneValidator"
            @keyup.enter="login"
            v-model="number"
            class="input_field"
            id="input_number"
            placeholder=" +49 123 456789"
          />
        </div>
        <div class="bottom">
          <div
            class="back"
            @click="$router.go(-1)"
          >Zurück</div>
          <img
            @click="request"
            class="arrow_right"
            src="../assets/arrow_right.svg"
            alt="../assets/vinny.jpeg"
          />
        </div>
      </div>
    </div>
    <div class="b">text</div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "Login",
  components: {},

  data() {
    return {
      errors: [],
      name: null,
      number: null,
      email: null,
      zip: null
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
    request: function() {
      if (this.checkForm()) {
        this.login();
      }
    },

    phoneValidator: function() {
      if (this.number.startsWith("0")) {
        this.number = "+49" + this.number.substring(1);
      }
    },
    checkForm: function() {
      this.errors = [];
      if (this.number) {
        return true;
      }
      if (!this.number) {
        this.errors.push("Handynummer benötigt.");
      }
    },
    login: function() {
      axios
        .post(
          "https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/login/" +
            this.number,
          {}
        )
        .then(res => {
          if (res.data.message == "user_message_sent") {
            this.$router.push({
              name: "Auth",
              params: { phone: this.number }
            });
          }
        });
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
      cursor: pointer;
      &:hover {
        opacity: 75%;
      }
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