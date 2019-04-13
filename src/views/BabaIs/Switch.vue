<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Swi</span>
      <span class="text-alt2">tch</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Switch.png" />
      <a href="https://www.nintendo.com/games/detail/baba-is-you-switch/"
        >Baba is eShop</a
      >
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $joycon-blue;
  color: $joycon-blue;
  text-transform: uppercase;
}
.text-alt2 {
  -webkit-text-stroke: $stroke-width $joycon-red;
  color: $joycon-red;
  text-transform: uppercase;
}
</style>
