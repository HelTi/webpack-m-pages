/**
 * Created by Administrator on 2017/6/24 0024.
 */
/**
 * Created by Administrator on 2017/6/24 0024.
 */
var path = require('path');
var fs = require('fs');
let page_files = [];
function each_file(dir) {
    try {
        fs.readdirSync(dir).forEach(function (file) {
            /*
            * {
            *   index:'./src/index.html',
            *   chunkname:'index'
            * }
            * */
            var file_obj={};
            var file_path = dir + '/' + file;
            var chunk_name = path.basename(file, '.html');
            /*entry_files[fname]=file_path;
            console.log(fname)*/
            file_obj[chunk_name]=file_path;
            file_obj['chuckName']=chunk_name;
            console.log(chunk_name)
            console.log(file_path)
            console.log(file)
            page_files.push(file_obj)
        })
    } catch (e) {

    }
}
each_file('./src/pages');
console.log(page_files);
module.exports=page_files;