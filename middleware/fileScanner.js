function getDirInDir(path) {
    if(process.server) {
        const fs = require("fs");
        return fs.readdirSync(path).filter(function (file) {
          return fs.statSync(path+'/'+file).isDirectory();
        });
      }
}

export default {
    getDirInDir
}