/* 1.构造继承  apply call  推荐 */
/* 使用call和apply借用其他构造函数的成员, 可以解决给父构造函数传递参数的问题, 但是获取不到父构造函数原型上的成员.也不存在共享问题 */
function Person0(name, friends) {
    this.name = name
    this.friends = friends
    this.showName = function () {
        console.log(this.name);
    }
}
function stu0(name, friends) {
    Person0.apply(this, [name, friends])
    this.eat = function () {
        console.log("gogo:", this.friends);
    }
}
console.log(" 1.构造继承");
var s0 = new stu0('aaa', 'ccc')
s0.showName()
s0.eat()


/* 2.原型链继承 */
/* 即 子构造函数.prototype = new 父构造函数() */
function Person(name, age) {
    this.name = name
    this.age = age
    this.eat = function () {
        console.log(this.age);
    }
}
function std(name) {
    this.name = name
    this.eatI = function () {
        console.log("hhh");
    }
}
/* console.log(std.prototype); */
console.log(" 2.原型链继承");
std.prototype = new Person()   //std -> person
std.prototype.constructor = std

/* 3.原型式继承 */
/* 借用构造函数的原型对象实现继承 */
function Person1(name, age) {
    this.name = name
    this.age = age
    this.eat = function () {
        console.log(this.age);
    }
}
function std1(name) {
    this.name = name
    this.eat = function () {
        console.log("hhh");
    }
}
console.log(" 3.原型式继承");
std1.prototype = std.prototype  //此时  std1 -> person   
var objStd1 = new std1()

/* 4.拷贝方式 */
/* 就是将对象的成员复制一份给需要继承的对象 */
var Person2 = {
    name: 'Li',
    age: 25,
    friends: ['小明', '小李', '小赵'],
    showName: function () {
        alert(this.name);
    }
}
var std2 = {}
for (index in Person2) {
    std2[index] = Person2[index]
}
Person2.age = 30
console.log(" 4.拷贝方式");
//console.log(Person2)
//console.log(std2) 
/* class继承



/* 5.组合继承 */
/*  借用构造函数 + 原型式继承 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    }
}
Person.prototype.showAge = function () {
    console.log(this.age);
}
function Student(name) {
    Person.call(this, name);
}
console.log(" 5.组合继承");
Student.prototype = Person.prototype;
Student.prototype.constructor = Student;



/* 6.class继承 */
class animal {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log("name = ",this.name)
    }
}
class Dog extends animal{
    constructor(name,age){
        super(name)
        this.age = age
        
    }
    go(){
        console.log("gogo");
    }
}
console.log(" 6.class继承");
var xm = new Dog('xm','23')
xm.hello()
xm.go()