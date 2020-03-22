<template lang="html">
    <div class="invite" @click="share()">
        <div class="icon friends">
            <img src="../assets/friends.svg">
        </div>
        <p>Freunde einladen auch zu helfen</p>
        <div class="icon arrow">
            <img src="../assets/arrow.svg">
        </div>
        <p v-if="toggle" class="copied">link coppie to clipboard</p>
        <input id="input" type="text" value="https://coco-help.now.sh"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    share() {
      if (navigator.share) {
        navigator.share({
          title: "COCO - Corona Connect",
          text:
            "Ich bin Helfer bei COCO corona connect und helfe während der Corona Pandemie älteren Menschen in meiner Nähe. Melde dich auch unverbindlich als Helfer an",
          url: "https://coco-help.now.sh"
        });
      } else {
        this.toggle = true;
        var copyText = document.getElementById("input");
        copyText.select();
        document.execCommand("copy");
        const self = this;
        setTimeout(function() {
          self.toggle = false;
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.invite {
  position: relative;
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
  .copied {
    position: absolute;
    min-width: 200px;
    top: 74px;
    left: 10px;
  }
  #input {
    opacity: 0.0001;
    position: absolute;
  }
}
</style>