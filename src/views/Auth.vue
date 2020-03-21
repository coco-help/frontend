<template>
  <div class="auth">
    <div id="verify">bestätigungs SMS code</div>
    <input type="number" name="sms"  class="input_field" id="sms_auth" placeholder="SMS Code">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Auth',
  components: {
  }
}
</script>

<style lang="scss">

#verify {
  height: 21px;

  font-family: Helvetica, Display;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;
}

.input_field {
  font-size: 18px;
  width: 232px;
  height: 49px;
  border: 1.6px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
}

</style>