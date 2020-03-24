<template lang="html">
    <div class="education">
        <div class="header">
            <div class="back"></div>
            <h1>Alles was du zu Covid-19 wissen solltest.</h1>
        </div>
        <div class="content">
            <h2>Ursprung</h2>
            <a href="https://www.infektionsschutz.de/coronavirus/">link</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.education {
  display: flex;
  flex-flow: column;
  .header {
    background-color: #b06270;
    width: 100vw;
    height: 30vh;
    padding: 40px 30px;
    .back {
    }
    h1 {
      font-weight: 600;
      font-size: 26px;
      line-height: 30px;
      color: #ffffff;
      width: 255px;
    }
  }
  .content {
    margin: 40px 30px;
    max-width: 600px;
  }
}
</style>