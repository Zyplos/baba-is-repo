<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Pegg</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Pegg.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $pegg;
  color: $pegg;
  text-transform: uppercase;
}
</style>
