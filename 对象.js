/* 方式一 推荐*/
function Person(name, age) {
    this.name = name
    this.age = age
    this.func1 = func1
}
function func1() {
    console.log(this.name);
}

var std1 = new Person('haha', 14)
var std2 = new Person('haha', 14)
std1.func1()
/* console.log(std1, std1.__proto__, Person.prototype);
console.log(std1.func1 === std2.func1);
 */


/* 方式二 */
var per1 = {
    name: "haha",
    age: '12',
    eat: function () {
        console.log("hhh");
    },
    readBook: function () {
    }
}

/* 方式三 */
var per2 = new Object()
per2.name = "haha"
per2.age = '23'

/* for(var i=0;i<6;i++){
    setTimeout(function(){
        console.log(i); //为什么输出的总是 6，而不是0,1,2,3,4,5
    },i*1000);
} */


/* 闭包 */
/*  */
function funcBB1(n) {
    var arr = []
    for (let i = 0; i < n; i++) {
       arr.push((function(i){
           return function(){
               return i * i
           }
       }(i)))
    }
    return arr
}
var f1 = funcBB1(3)
console.log("funcBB1:");
console.log(f1[0]());
console.log(f1[1]());

function funcBB2(){
    var num = 0 
    function a (){
        num++
        return num
    }
    return a
}
var f = funcBB2()
console.log("funcBB2:");
console.log(f());
console.log(f());


function funcBB3(n){
    for (let i = 0; i < n; i++) {
        (function(i){
            setTimeout(() => {
            console.log(i);
            }, i*1000);
        })(i)
    }
}
console.log("funcBB3:");
funcBB3(4)