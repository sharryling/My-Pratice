const params = {
    name: 'wdfwe'
}
function Persion(params) {
    this.name = params.name
    this.printf = () => {
        console.log("name:", this.name)
    }
}
const newObj = new Persion(params)


/**
 * 手写new
 */

const newObj1 = create(Persion, params)

function create(Con, ...args) {
    const obj = new Object()
    obj.__proto__ = Con.prototype
    const result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
}


var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
       console.log('aaa', this)
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A 

var B = {
   name: 'B'
}

sayHello.call(B); //还是A
sayHello.call(); //还是A

function hoistFunction() {
    foo(); // 2
    var foo = function() {
      console.log(1);
    };
    foo(); // 1
    function foo() {
      console.log(2);
    }
    foo(); // 1
  }
  
  hoistFunction();


  var data = [];

for (let i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();