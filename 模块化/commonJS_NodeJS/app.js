/*
    CommonJS 规范   ==> commonJS_Node 在服务器端
    ->
    module.exports 
    exports
    <-
    require()
*/ 
const a = require('./modules/module1.js.js')
const { value, func } = require('./modules/module2')
const b = require('./modules/module3')
console.log('a:', a.value)
a.func()
console.log('b:', value)
func('I AM B')
console.log('c:')
b('I AM C')