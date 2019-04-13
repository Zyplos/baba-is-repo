<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Gone!</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/GoneCrab.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $zyplos;
  color: $zyplos;
  text-transform: uppercase;
}
</style>
