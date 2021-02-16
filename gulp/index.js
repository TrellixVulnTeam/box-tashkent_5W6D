let fileSistem = require("fs");
let path = "./gulp/tasks/";
let arrayPath = fileSistem.readdirSync(path).map( param => path + param )
module.exports = arrayPath;