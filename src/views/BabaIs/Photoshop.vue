<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Photoshop</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Photoshop.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $photoshop;
  color: $photoshop;
  text-transform: uppercase;
}
</style>
