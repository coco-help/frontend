<template>
  <div class="register">
    <img class="logo" src="../assets/logo.png" alt="../assets/vinny.jpeg">
    <div class="descr">Cool, dass du in <span class="location_plz">{{ city }} - {{ plz }}</span> helfen willst. Teil uns noch ein paar Infos über dich mit</div>
    <div class="inputs">
      <input type="text" name="name"  class="input_field" id="input_name" placeholder="Name">
      <input type="number" name="number"  class="input_field" id="input_number" placeholder="Handynummer">
      <input type="text" name="email"  class="input_field" id="input_mail" placeholder="E-Mail">
    </div>
    <img class="arrow_right" src="../assets/arrow_right.svg" alt="../assets/vinny.jpeg">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Register',
  components: {
  },

  data() {
    return {
      city: 'Berlin',
      plz:'13355'
    }
  },
}
</script>

<style lang="scss" scoped>

.logo {
  width: 82px;
  height: 33px;
}

.descr {
  margin-bottom: 37px;
}

.location_plz {
  font-weight: 600;
}

.inputs{
  margin: auto;
  width: 50%;

  .input_field {
    margin: auto;
    margin-bottom: 39px;
    display: block;
    font-size: 18px;
    width: 315px;
    height: 50px;
    border: 1.6px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
}

}

</style>