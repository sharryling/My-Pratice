var l: string = 'asd'
var k = 23;
var lad: string = 'asd';
console.log(l)

function getInfo(name: string, age: string): string {
    return `${name}---${age}---${name + age}`
}
console.log(getInfo('hh', '23'))


//string
//boolean
//number
//数组类型
var arrr: Array<number> = [1, 2, 3];
var arr: number[] = [1, 2];
//元组类型
var x: [string, number, boolean] = ['abc', 12, true];
//enum
enum Flag { success = 1, error = 2 };
let s: Flag = Flag.success;
let e: Flag = Flag.error;
