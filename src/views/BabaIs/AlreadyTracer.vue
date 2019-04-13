<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Already Tracer</span>
    </h1>
    <div class="baba-content">
      <img alt="Baba" src="@/assets/AlreadyTracer.png" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $orange;
  color: $orange;
  text-transform: uppercase;
}
</style>
