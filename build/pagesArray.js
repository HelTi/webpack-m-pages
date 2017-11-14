/**
 * Created by Administrator on 2017/6/24 0024.
 */
/**
 * Created by Administrator on 2017/6/24 0024.
 */
let path = require('path');
let fs = require('fs');
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
each_file('../src/pages');
module.exports=pagesArray;