/**
 * Created by Administrator on 2017/6/24 0024.
 */
let path = require('path');
let fs = require('fs');
let entry_files = {};
function each_file(dir) {
    try {
        fs.readdirSync(dir).forEach(function (file) {
            let file_path = dir + '/' + file;
            let fname = path.basename(file, '.js');
            entry_files[fname]=file_path;
        })
    } catch (e) {

    }
}
each_file('../src/js');

module.exports=entry_files;