
/* 
    专门用于浏览器端，加载是异步的。
*/

/*
    AMD 规范   ==> 比 comonJS_Browserify 在浏览器端 出现得更早
    -> 定义/暴露模块
      - 没有依赖的模块
      -   有依赖的模块
    
*/ 
(function(){
    requirejs.config({
        paths: {
            module1: './modules/module1',
            module2: './modules/module2'
        }
    })

    requirejs(['module2'], function(module2){
        module2.func()
    })
})()
