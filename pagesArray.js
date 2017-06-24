/**
 * Created by Administrator on 2017/6/24 0024.
 */
/**
 * Created by Administrator on 2017/6/24 0024.
 */
var path = require('path');
var fs = require('fs');
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
            var file_obj={};
            var file_path = dir + '/' + file;
            var chunk_name = path.basename(file, '.html');
            file_obj['filename']=file;
            file_obj['template']=file_path;
            file_obj['chuckName']=chunk_name;
            pagesArray.push(file_obj)
        })
    } catch (e) {

    }
}
each_file('./src/pages');
module.exports=pagesArray;