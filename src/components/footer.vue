<template>
  <div class="Footer">
    <div class="left">
      <img class="logo" src="../assets/logo.png" />
      <br />
      <div class="links">
        <div>
          <a href="https://github.com/coco-help" target="_blank">Open Source on GitHub</a>
          <br>
          <a class="about" href @click="clickAbout">About</a>
          <br/>
          <a href @click="clickImpressum">Impressum</a>
          <br/>
          <a href @click="clickDatenschutz">Datenschutz</a>
          <br/>
        </div>
        <div class="symbols">
          <a href="https://github.com/coco-help" target="_blank"><img src="../assets/GitHub-Mark.png" class="github" /></a>
        </div>
      </div>
      <p>coco - corona connect 2020</p>
    </div>

    <a href="https://devpost.com/software/corona-connect" target="_blank">
      <img src="../assets/wirvsvirus.png" class="wirvsvirus" />
    </a>
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
  width: 100%;
  overflow: hidden;
}
@media (min-width: 768px) {
}
@media (max-width: 768px) {
}

.logo {
  height: auto;
  width: 20%;
  margin-top: 1vh;
}

.left {
  position: relative;
  padding: 5vw;
}

.links {
  display: flex;

  margin-top: 3vh;
  flex-flow: row;
  a {
    align-items: flex-start;
    color: black;
    margin-right: 0.5vw;

    &:hover {
      color: gray;
    }
  }
  .github {
    align-items: flex-end;
    height: 25px;
    background-color: #f5f5f5;

    &:hover {
      cursor: pointer;
      opacity: 75%;
    }
  }
}
p {
  margin-top: 3vh;
  font-weight: bold;
}

.wirvsvirus {
  position: absolute;
  right: 2vw;
  top: 3vh;
  height: auto;
  width: 60%;
}
</style>
