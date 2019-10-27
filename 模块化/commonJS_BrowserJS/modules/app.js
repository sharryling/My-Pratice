/*
    CommonJS 规范   ==> comonJS_Browserify 在浏览器端
    ->
    Browserify 需要对文件进行打包处理，浏览器“不认识”require
*/ 

const module1 = require('./module1')
module1.func()