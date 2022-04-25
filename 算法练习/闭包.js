function funcA(){
    var a = 0
    var list = []
    function funcB(){
        a++ 
        list.push(a)
        return list
    }
    return funcB
}
var func = funcA()
console.log(func());
console.log(func());
const b = func()
b.push('a')
console.log(func());
