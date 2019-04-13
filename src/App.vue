<template>
  <div id="app">
    <router-view />
    <div class="nav-item" id="baba-menu">
      <a href="#" @click.prevent="toggleMenu()">Discovered Babas</a>
    </div>
    <div class="nav-item" id="baba-new">
      <a href="#" @click.prevent="redirectBaba()">New Baba</a>
    </div>
    <nav :class="{ 'display-none': navbarToggle }">
      <a href="#" @click.prevent="toggleMenu()" id="baba-close">Close</a>
      <p :class="{ 'text-gold': discoveredAll }">
        {{ discovered.length }} of {{ babaMax }} discovered
      </p>
      <ul>
        <router-link
          v-for="(discoveredBaba, index) in discovered"
          :key="`baba-${index}`"
          :to="discoveredBaba"
          tag="li"
          >{{ discoveredBaba }}</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discovered: [],
      navbarToggle: true,
      babaMax: babaFileList.length
    };
  },
  methods: {
    redirectBaba() {
      const randomBaba =
        babaFileList[Math.floor(Math.random() * babaFileList.length)];
      this.$router.push(randomBaba);
    },
    toggleMenu() {
      this.navbarToggle = !this.navbarToggle;
    }
  },
  computed: {
    discoveredAll() {
      return this.discovered.length == this.babaMax;
    }
  },
  created() {
    if (!localStorage.discovered) {
      localStorage.discovered = JSON.stringify([]);
    } else {
      this.discovered = JSON.parse(localStorage.discovered);
    }
  },
  mounted() {
    //console.log("yes.")
  },
  watch: {
    $route(to) {
      const name = to.path.substring(1, to.path.length).toLowerCase();
      const discoveredData = this.discovered;
      if (!discoveredData.includes(name)) {
        discoveredData.push(name);
        localStorage.discovered = JSON.stringify(discoveredData);
      }
    }
  }
};
</script>

<style lang="scss">
@import "variables";
@import url("https://fonts.googleapis.com/css?family=Amatic+SC:700");
*,
::after,
::before {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
  background: url(./assets/bg.png) repeat center center;
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
.display-none {
  display: none;
}
.text-gold {
  color: $buggy;
}
h1,
h2,
h3,
h4,
h5,
h6,
a {
  color: #fff;
}
h1 {
  font-size: 6em;
  -webkit-text-stroke: $stroke-width #fff;
  margin: 1rem;
  .text-primary {
    -webkit-text-stroke: $stroke-width $primary;
    color: $primary;
    text-transform: uppercase;
  }
}
.baba-content {
  display: flex;
  flex-grow: 1 !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}
h1,
.baba-content {
  padding: 30px;
}

img {
  max-width: 100%;
  height: auto;
}
.nav-item {
  position: absolute;
  cursor: pointer;
  a {
    text-decoration: underline;
    text-transform: uppercase;
    color: $wheat;
  }
}
#baba-menu {
  top: 20px;
  right: 20px;
}
#baba-new {
  top: 20px;
  left: 20px;
}
#baba-close {
  text-decoration: underline;
  text-transform: uppercase;
  color: #ff3e3e;
  text-align: left;
}
nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 55;
  background: #242424;
  width: 150px;
  text-align: right;
  padding: 20px;
  ul {
    padding: 0;
    list-style-type: none;
    li {
      padding: 5px;
      a {
        color: #fff;
      }
      &:hover {
        background-color: #080808;
      }
    }
  }
}
</style>
