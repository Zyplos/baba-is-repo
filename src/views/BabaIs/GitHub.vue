<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">GitHub</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/GitHub.png" />
      <a href="https://github.com/Zyplos/baba-is-repo">Baba is Code</a>
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $gray;
  color: $gray;
  text-transform: uppercase;
}
</style>
