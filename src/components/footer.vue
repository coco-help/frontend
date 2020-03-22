<template>
  <div class="Footer">
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
        >About</a>
        <a href="">Impressum</a>
        <a href="">Datenschutz</a>
      </div>
      <p>coco - corona connect 2020</p>
    </div>
    <div class="column">
      <img
        src=""
        alt=""
      >
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  height: 30px;
}

.links {
  margin-top: 3vh;
  a {
    margin-top: 4vh;
  }
}
p {
  margin-top: 3vh;
  font-weight: bold;
}

</style>
