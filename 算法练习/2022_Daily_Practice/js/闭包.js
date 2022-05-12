function closed () {
    let i = 0 
    return () => {
        i++
        return i
    }
}
const func = closed()
console.log('closed', func());
console.log('closed', func());


var data = [];

for (var i = 0; i < 3; i++) {
    console.log('22222', i);
  data[i] = function () {
    console.log(i);
  };
}
// console.log('22222', i);
// ===>>>> 闭包解决1：
// for (var i = 0; i < 3; i++) {
//     data[i] = (function(j) {
//       return () => {
//           console.log(j);
//         };
//     })(i)
// }

data[0]();  // 3
data[1]();	// 3
data[2]();	// 3
