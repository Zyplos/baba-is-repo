<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Baba</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Baba.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $primary;
  color: $primary;
  text-transform: uppercase;
}
</style>
