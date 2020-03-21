<template>
  <div class="auth">
    <p id="verify">Bitte gib den 4-stelligen Code ein, den wir dir geschickt haben an:</p>
    <input
      type="number"
      name="sms"
      class="input_field"
      id="sms_auth"
      placeholder="SMS CODE"
    >
    <br>
    <a class="">Code erneut senden</a>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Auth",
  components: {}
};
</script>

<style lang="scss" scope>
.auth {
  text-align: center;
}

#verify {
  height: 21px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}

.input_field {
  margin-top: 10px;
  font-size: 18px;
  width: 232px;
  height: 49px;
  border: 1.6px solid #000000;
  box-sizing: border-box;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 10px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>