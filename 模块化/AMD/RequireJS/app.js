
/* 
    专门用于浏览器端，加载是异步的。
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
