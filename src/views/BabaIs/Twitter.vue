<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Twitter</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Twitter.png" />
      <a href="https://twitter.com/babaisyou_">Baba is Twitter</a>
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $twitter;
  color: $twitter;
  text-transform: uppercase;
}
</style>
