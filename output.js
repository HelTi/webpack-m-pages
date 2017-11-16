/**
 * webpack构建时运行 node output生成配置文件
 */

const fs = require('fs');
const path = require('path');

//入口文件
let entry_files = {};
function each_entry_file(dir) {
    try {
        fs.readdirSync(dir).forEach(function (file) {
            let file_path = dir + '/' + file;
            let fname = path.basename(file, '.js');
            entry_files[fname]=file_path;
        })
    } catch (e) {

    }
}
each_entry_file('./src/js');
let entrysStr = 'module.exports=' + JSON.stringify(entry_files);
fs.writeFile('./config/entrys.js', entrysStr, (err) => {
    if (err) throw err;
    console.log('done')
});
//输出html模板
let pagesArray = [];
function each_file(dir) {
    try {
        fs.readdirSync(dir).forEach(function (file) {
            /*
            * {
            *   index:'./src/index.html',
            *   chunkname:'index'
            * }
            * */
            let file_obj={};
            let file_path = dir + '/' + file;
            let chunk_name = path.basename(file, '.html');
            file_obj['filename']=file;
            file_obj['template']=file_path;
            file_obj['chuckName']=chunk_name;
            pagesArray.push(file_obj)
        })
    } catch (e) {

    }
}
each_file('./src/pages');
let htmlsPluginStr = 'module.exports=' + JSON.stringify(pagesArray)
fs.writeFile('./config/htmlPages.js', htmlsPluginStr, (err) => {
    if (err) throw err;
    console.log('done')
});