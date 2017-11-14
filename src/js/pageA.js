/**
 * Created by Administrator on 2017/4/28 0028.
 */
require("../assets/css/pageA/a.css")
require("../assets/css/pageA/as.scss")
console.log('pagea');
let mtable = require("../lib/easyTable.js");
let _ = require('lodash');
let data = [
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

let objArr=[
    {a:'aa'},
    {b:'bb'},
    {c:'cc'}
]
_.forEach(objArr,function (i,j) {
    console.log(i,j)
    if(_.isObject(i)){
        _.forEach(i,function (value) {
            console.log('v:'+value)
        })
    }
})
_.forEach(objArr,(i)=>{
    console.log('es6')
    console.log(i)
})