<template>
  <main>
    <h1>
      <span class="text-primary">Baba</span> is
      <span class="text-alt">Code</span>
    </h1>
    <div class="baba-content">
      <code>
        &lt;img alt=&quot;Baba&quot; src=&quot;@/assets/Code.png&quot; /&gt;
      </code>
    </div>
  </main>
</template>

<style scoped lang="scss">
.text-alt {
  -webkit-text-stroke: $stroke-width $pure-green;
  color: $pure-green;
  text-transform: uppercase;
}
code {
  font-size: 2em;
  word-break: break-all;
}
</style>
