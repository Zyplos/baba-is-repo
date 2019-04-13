import Vue from "vue";
import Router from "vue-router";
import Random from "./views/Random.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const data = {
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Random
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
};

for (const word of babaFileList) {
  data.routes.push({
    path: "/" + word,
    name: "babaIs" + word,
    component: () => import("./views/BabaIs/" + word + ".vue")
  });
}
export default new Router(data);
