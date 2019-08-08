"use strict";
var l = 'asd';
var k = 23;
var lad = 'asd';
console.log(l);
function getInfo(name, age) {
    return name + "---" + age + "---" + (name + age);
}
console.log(getInfo('hh', '23'));
//string
//boolean
//number
//数组类型
var arrr = [1, 2, 3];
var arr = [1, 2];
//元组类型
var x = ['abc', 12, true];
//enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
var e = Flag.error;
