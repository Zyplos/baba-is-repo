<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Flag</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Flag.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $buggy;
  color: $buggy;
  text-transform: uppercase;
}
</style>
