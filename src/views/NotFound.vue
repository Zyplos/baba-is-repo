<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">404</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/404.png" />
      <a href="/">Baba is Home</a>
    </div>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $gray;
  color: $gray;
  text-transform: uppercase;
}
a {
  color: white;
}
</style>
