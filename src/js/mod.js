/**
 * Created by Administrator on 2017/5/5 0005.
 */
/*
if(typeof module !=='undefined' && typeof exports ==='object'){
    var $=require('jquery');
}else{
    var $=window.$
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
        define(function(){return mod})
    }else{
        window.mod=mod;
    }
}).call(function(){
    return (typeof window !=='undefined' ? window :global);
},$)*/
