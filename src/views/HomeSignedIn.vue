<template lang="html">
    <div class="home">
      <div class="a c">
        <div class="header">
            <img src="../assets/logo.png" class="logo">
        </div>
        <div class="state" v-if="onOff">
            <p><b>Danke</b>, dass du hilfst.<br>Wir werden dich anrufen sobald es eine neue Anfrage in deiner Umgebung gibt.</p>
        </div>
        <div class="state off" v-else>
            <p><b>Achtung!</b> Du hast eingstellt nicht erreichbar zu sein.<br>Um zu helfen ändere bitte dein Status.</p>
        </div>
        <div class="invite">
            <div class="icon friends">
                <img src="../assets/friends.svg">
            </div>
            <p>Freunde einladen auch zu helfen</p>
            <div class="icon arrow">
                <img src="../assets/arrow.svg">
            </div>
            <Share></Share>
        </div>
        <div class="grow"></div>
        <div class="education">
            <h2>Education</h2>
            <div class="cards">
                <div class="card 1" @click="$router.push('/education/about-covid-19')">
                    <h3>Alles was du zu Covid-19 wissen solltest.</h3>
                    <img src="../assets/arrow_w.svg">
                </div>
            </div>
        </div>
      </div>
      <div class="b c">
        <div class="line"></div>
        <div class="onOff" @click="toggle()">
            <p>Ich will angerufen werden</p>
            <div class="ios-toggle" :class="{checked: onOff}">
                <span class="slider"></span>
            </div>
        </div>
        <div class="line"></div>
        <div class="logout" @click="logout()">Abmelden</div>
      </div>

    </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

import Share from "../components/Share.vue";

export default {
  data() {
    return {
      onOff: true
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
    toggle() {
      //  console.log("ok");
      this.onOff = !this.onOff;
      const token = jwt_decode("token");

      axios.put(
        `https://7xbv26cd6k.execute-api.eu-central-1.amazonaws.com/production/helper/${token.phone}`,
        { is_active: this.onOff }
      );
      // .then(function(response) {
      //   console.log(response);
      // });
    }
  },
  components: {
    Share
  }
};
</script>

<style lang="scss" scoped>
.c {
  display: flex;
  flex-flow: column;
}

.home {
  display: flex;
  flex-flow: column;
  padding: 0 30px;
  min-height: 100vh;

  .a {
    .header {
      .logo {
        margin-top: 44px;
        height: 40px;
        width: 82px;
      }
    }

    .state {
      margin-top: 24px;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 20px;

      &.off {
        background-color: rgba($color: #e73454, $alpha: 0.1);
      }
    }

    .invite {
      margin-top: 14px;
      display: flex;
      flex-flow: row;
      background: #ffffff;
      border: 1px solid #303030;
      border-radius: 10px;
      padding: 10px;
      align-items: center;

      .friends {
        min-width: 46px;
        height: 46px;
        background-color: #262d37;
        border-radius: 50%;
        margin-right: 14px;
      }
      p {
        max-width: 140px;

        margin-right: auto;
      }
      .arrow {
        height: 18px;
        width: 18px;
        margin-right: 14px;
      }
    }

    .grow {
      flex-grow: 1;
    }

    .education {
      margin-top: 40px;

      .cards {
        margin-top: 14px;

        .card {
          position: relative;
          height: 172px;
          width: 144px;
          border-radius: 10px;
          background-color: #b06270;

          h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 125%;
            padding: 15px;
            color: #fff;
          }

          img {
            position: absolute;
            bottom: 19px;
            right: 19px;
          }
        }
      }
    }
  }

  .b {
    .line {
      height: 1px;
      width: 100%;
      margin: 34px 0;
      background-color: #d6d6d6;
    }

    .onOff {
      color: #000;
      display: flex;

      p {
        flex-grow: 1;
      }

      $toggle-color-active: #e73454;
      $toggle-color-deactive: #eaeaeb;
      $transition-speed: 0.3s;

      .ios-toggle {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        display: inline-block;
        position: relative;
        width: 51px;
        height: 31px;

        &.checked {
          span.slider {
            background-color: $toggle-color-active;
          }

          span.slider:before {
            transform: translateX(20px);
          }
        }

        span.slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 18px;
          background-color: $toggle-color-deactive;
          -webkit-transition: $transition-speed;
          -moz-transition: $transition-speed;
          -ms-transition: $transition-speed;
          -o-transition: $transition-speed;
          transition: $transition-speed;

          &:before {
            position: absolute;
            content: "";
            height: 27px;
            width: 27px;
            left: 2px;
            bottom: 2px;
            border-radius: 50%;
            box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.06),
              0px 3px 8px rgba(0, 0, 0, 0.15);
            background-color: white;
            -webkit-transition: $transition-speed;
            -moz-transition: $transition-speed;
            -ms-transition: $transition-speed;
            -o-transition: $transition-speed;
            transition: $transition-speed;
          }
        }
      }
    }
    .logout {
      color: #868686;
      margin-bottom: 40px;
    }
  }
}

@media (min-width: 768px) {
  .home {
    flex-flow: row;

    .a {
      width: 50vw;
      margin-right: 20vw;
      align-items: flex-start;

      .grow {
        flex-grow: 0;
      }
    }
    .b {
      padding-top: 84px;
      width: 30vw;
    }
  }
}
</style>