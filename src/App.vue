<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "bulma";
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600&display=swap');

$breakpoint: 768px;



// @media (min-width: $breakpoint) {
// desktop style
// }
// @media  (max-width: $breakpoint) {
// mobile style
// }


#app {
  position: relative;
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100vw;
  overflow: hidden;
}
</style>
