function funcA(){
    var a = 1
    function funcB(){
        console.log(a)
    }
    return funcB
}
var func = funcA()
console.log(func);
