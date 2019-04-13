const fs = require("fs");
let fileNames = [];

const allFiles = fs.readdirSync("./src/views/BabaIs/");

for (let [key, value] of Object.entries(allFiles)) {
  const splitName = value.split(".");
  fileNames.push(splitName[0]);
}
module.exports = fileNames;
