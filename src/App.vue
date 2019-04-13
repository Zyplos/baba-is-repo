<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "variables";
@import url("https://fonts.googleapis.com/css?family=Amatic+SC:700");
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
body {
  background-color: #080808;
  font-family: "Amatic SC", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
}
#app,
main {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
}
h1 {
  font-size: 6em;
  -webkit-text-stroke: $stroke-width #fff;
  margin: 1rem;
}
h1 .text-primary {
  -webkit-text-stroke: $stroke-width $primary;
  color: $primary;
  text-transform: uppercase;
}
.baba-content {
  display: flex;
  flex-grow: 1 !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #301ed1;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
