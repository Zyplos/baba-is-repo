<template>
  <main>
    <!--<h1>
      <span class="text-primary">Baba</span> is
      <span class="text-spectrum">Random</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Baba.png" />
      <h1>{{ babaList }}</h1>
    </div>-->
  </main>
</template>

<script>
export default {
  name: "random",
  data() {
    return {
      babaList: babaFileList
    };
  },
  beforeCreate() {
    // stop it
    // eslint-disable-next-line no-console
    //console.log("data", babaFileList);
    const randomBaba =
      babaFileList[Math.floor(Math.random() * babaFileList.length)];
    this.$router.push(randomBaba);
  }
};
</script>

<style scoped lang="scss">
//https://daneden.github.io/animate.css/
.text-spectrum {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 4s infinite linear;
  -webkit-text-stroke: 0 !important;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
.text-alt {
  -webkit-text-stroke: $stroke-width $primary;
  color: $primary;
  text-transform: uppercase;
}
</style>
