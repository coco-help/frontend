<template>
  <div class="Footer">
    <div class="columns">
      <div class="column is-three-quarters">
        <img
          class="logo"
          src="../assets/logo.png"
        >
        <br>
        <div class="links">
          <a
            class="about"
            href=""
            @click="clickAbout"
          >About</a><br>
          <a
            href=""
            @click="clickImpressum"
          >Impressum</a><br>
          <a
            href=""
            @click="clickDatenschutz"
          >Datenschutz</a><br>
        </div>
        <p>coco - corona connect 2020</p>
      </div>
      <div class="column">
        <a href="https://devpost.com/software/corona-connect"><img
          src="../assets/wirvsvirus.png"
          class="wirvsvirus"
        ></a>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },

  methods: {
    clickAbout: function() {
      this.$router.push({ path: "/about" });
    },
    clickImpressum: function() {
      this.$router.push({ path: "/impressum" });
    },
    clickDatenschutz: function() {
      this.$router.push({ path: "/datenschutz" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Footer {
  background: #f5f5f5;
  min-height: 30vh;
  position: relative;
  width: 100vh;
  overflow: hidden;
}
@media (min-width: 768px) {
  .Footer {
    position: relative;
    width: 60vw;
  }
}
@media (max-width: 768px) {
    .Footer {
      position: absolute;
      left: 5vw;
      top: 3vh;
      width: 12vh;
    }
  }

img {
  height: 30px;
}

.links {
  margin-top: 3vh;
  a {
    margin-top: 4vh;
    color: black;
    &:hover {
      color: gray;
    }
  }
}
p {
  margin-top: 3vh;
  font-weight: bold;
}

.wirvsvirus {
  height: 50px;
  float: center;
}
</style>
