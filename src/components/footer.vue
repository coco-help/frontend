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
        >About</a><br>
        <a href="">Impressum</a><br>
        <a href="">Datenschutz</a><br>
      </div>
      <p>coco - corona connect 2020</p>
    </div>
    <div class="column">
      <img
        src="../assets/wirvsvirus.png"
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
    color: black;
  }
}
p {
  margin-top: 3vh;
  font-weight: bold;
}

</style>
