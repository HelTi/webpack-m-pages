

if(typeof module !=='undefined' && typeof exports ==='object'){
    var $=require('jquery');
}else{
    var $=window.$
}
(function(){

    var mtable = function (opt, data) {
        this.tableId = opt.tableid;
        this.tableClass = opt.tableclass;
        this.tableParent = opt.tableparent;
        // this.rows = opt.rows;
        //this.cells = opt.cells;
        this.table;
        this.theade = opt.theade;
        this.addDom = opt.adddom;
        this.removeDom = opt.removedom;
        this.data = data;
        this.mergeCells = opt.mergeCells || false;
        if (this instanceof mtable) {
            this.init();
            return this;
        } else {
            return new mtable(opt, data).init()
        }
    }
    mtable.prototype = {
        constructor: mtable,
        init: function () {
            var that = this;
            that.createTable();
            //合并单元格
            if (this.mergeCells == true) {
                mtable.MergeCell(that.tableId)
            }
            this.addEventDom();
            this.removeEventDom();
            return this;
        },
        createTr: function () {
            var tr = document.createElement('tr');
            this.table.appendChild(tr);
        },
        createTd: function () {

        },
        createTable: function () {
            var that = this;
            var t = createTable({
                id: that.tableId,
                class: that.tableClass
            }, that.data, that.theade);
            if (this.tableParent != null && this.tableParent != '') {
                $(this.tableParent).append(t)
            } else {
                document.body.appendChild(t);
            }
        },
        insertRow: function (index) {

        },
        addEventDom: function () {
            var that = this;
            //var tableObj=document.getElementById('m');
            $(this.addDom).on('click', function () {
                console.log("开始生产表格...")
                that.createTable();
            })
        },
        removeEventDom: function () {
            $(this.removeDom).on('click', function () {

            })
        }
    }
    //动态生成表格
    function createTable(attr, data, tableheade) {
        var vtable = document.createElement("table");
        var theade = document.createElement('tr');
        theade.innerHTML = tableheade;
        // vtable.appendChild(theade);
        var tbody = document.createElement("tbody");
        tbody.appendChild(theade)
        if (attr.id != null) {
            vtable.setAttribute("id", attr.id);
        }
        //添加类
        if (attr.class != null) {
            var classlist = attr.class.split(" ");
            for (var c in classlist) {
                vtable.classList.add(classlist[c]);
            }

        }
        $.each(data, function (index, item) {
            var tr = document.createElement("tr");
            for (var i in item) {
                console.log(item)
                var td = document.createElement("td");
                td.innerHTML = item[i];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        vtable.appendChild(tbody);
        return vtable;
    }

    mtable.MergeCell = MergeCell;
    //合并单元格
    function MergeCell(tableId) {
        var tab = document.getElementById(tableId);
        var clen = tab.rows.item(0).cells.length;
        var val, count, start;
        for (var col = 0; col < clen; col++) {
            count = 1;
            val = "";
            for (var i = 0; i < tab.rows.length; i++) {
                if (val == tab.rows[i].cells[col].innerHTML) {
                    count++;
                } else {
                    if (count > 1) {
                        start = i - count;
                        tab.rows[start].cells[col].rowSpan = count;
                        for (var j = start + 1; j < i; j++) {
                            tab.rows[j].cells[col].style.display = "none";
                        }
                        count = 1;
                    }
                    val = tab.rows[i].cells[col].innerHTML;
                }
            }

            if (count > 1) {
                start = i - count;
                tab.rows[start].cells[col].rowSpan = count;
                for (var j = start + 1; j < i; j++) {
                    tab.rows[j].cells[col].style.display = "none";
                }
            }
        }

    }

    //兼容模块
    if(typeof module !=='undefined' && typeof exports ==='object'){
        module.exports=mtable;
    }else if(typeof define ==='function' && (define.amd || define.cmd)){
        define([jQuery],function(){
            return mtable;
        })
    }else{
        window.mtable=mtable;
    }
}).call(function(){
   return (typeof window !=='undefined' ? window : global )
},$)

