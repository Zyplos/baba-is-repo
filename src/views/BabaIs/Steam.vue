<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Steam</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/Steam.png" />
      <a href="https://store.steampowered.com/app/736260/Baba_Is_You/"
        >Baba is Steam</a
      >
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $steam;
  color: $steam;
  text-transform: uppercase;
}
</style>
