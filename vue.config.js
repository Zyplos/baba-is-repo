const babaDataFile = require("./babaData.js");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/_variables.scss";
          `
      }
    }
  },
  //https://github.com/vuejs/vue-cli/issues/1647#issuecomment-459650275
  chainWebpack: config => {
    config.plugin("define").tap(definitions => {
      definitions[0]["babaFileList"] = JSON.stringify(babaDataFile);
      return definitions;
    });
  }
};
