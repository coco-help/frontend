<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bulma";
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400,600&display=swap");

$breakpoint: 768px;

body,
html {
  margin: 0px;
  padding: 0px;
}
// @media (min-width: $breakpoint) {
// desktop style
// }
// @media  (max-width: $breakpoint) {
// mobile style
// }

#app {
  position: absolute;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100vw;
  overflow: hidden;
}

p {
  font-size: 16px;
  line-height: 125%;
  color: #303030;
}
b {
  font-weight: 600;
}
h1 {
}
h2 {
  font-weight: 600;
  font-size: 18px;
  line-height: 125%;
}
</style>
