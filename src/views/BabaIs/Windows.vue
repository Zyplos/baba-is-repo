<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Windows</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Windows.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $windows;
  color: $windows;
  text-transform: uppercase;
}
</style>
