let path = require('path');
let fs = require('fs');
module.exports =function getEntrys() {
    let matchs;
    let files = {};
    let entry = [];
    let modules = path.resolve(__dirname, './src/modules/');
    let dirs = fs.readdirSync(modules);
    dirs.forEach(function(item, index) {
        let itemPath = path.resolve(modules, item);
        let sta = fs.statSync(itemPath);
        if (sta.isDirectory()) {
            let filesDir = fs.readdirSync(itemPath);
            filesDir.forEach(function(val, index) {
                matchs = /(.+)\.js$/g.test(val);
                if (matchs) {
                    let prname = val.split('.')[0];
                    files[prname] = path.resolve(itemPath, val);
                }
            });
        }
    });
    //console.log(files);
    return files;
};