/**
 * Created by Administrator on 2017/4/28 0028.
 */
require("../css/pageA/a.css")
require("../css/pageA/as.scss")
console.log('pagea');
var mtable = require("../lib/easyTable.js");
var data = [
    {'a': '小明', 'b': '100'},
    {'a': '小明', 'b': '250'},
    {'a': '小明', 'b': '260'},
    {'a': '小明', 'b': '270'},
    {'a': '小花', 'b': '90'},
    {'a': '小花', 'b': '190'}
]
new mtable({
    tableid: 'm',
    adddom: ".add",
    tableclass: 'table table-bordered',
    tableparent: '.tcon',
    theade: '<td>姓名</td><td>价格</td>',
    mergeCells: true
}, data)