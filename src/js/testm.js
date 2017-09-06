/*
/!**
 * Created by Administrator on 2017/5/5 0005.
 *!/

var $=null;
console.log('iswindow:'+typeof window)
if(typeof module !=='undefined' && typeof exports ==='object'){
    $=require('jquery');
}else{
    $=window.$
}
;(function(){
    var mod=function(){
        console.log('my module');
        say();
        console.log($)
        $('p').css('font-size','60px')
    }
    function say(){
        console.log('say function')
    }
    mod.prototype={
        constructor:mod,
        init:function(){
            console.log('init prototype');
            say();
        }
    }
    if(typeof module !=='undefined' && typeof exports ==='object'){
        module.exports = mod;
    }else if(typeof define ==='function' && (define.amd || define.cmd)){
        define([$],function(){return mod})
    }else{
        this.mod=mod;
    }
}).call(function(){
    return this || (typeof window !=='undefined' ? window :global);
},$)

function setup({dispatch}){
    dispatch({type:'queryUser'});
    window.onresize=function(){
        return dispatch({type:'changeNavbar'})
    }
}*/
