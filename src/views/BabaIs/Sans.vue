<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Sans</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Sans.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $aqua;
  color: $aqua;
  text-transform: uppercase;
}
</style>
