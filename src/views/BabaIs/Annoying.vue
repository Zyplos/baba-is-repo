<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Annoying</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Annoying.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $light-gray;
  color: $light-gray;
  text-transform: uppercase;
}
</style>
