(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const module1 = require('./module1')
module1.func()
},{"./module1":2}],2:[function(require,module,exports){
/*
    CommonJS 规范   ==> comonJS_Browserify 在浏览器端
    ->
    Browserify 需要对文件进行打包处理，浏览器“不认识”require
*/ 

exports.func = () => {
    console.log('exports.func ');
    
}
},{}]},{},[1]);
