var data = [];

// for (var i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0](); // 3
// data[1]();// 3
// data[2]();// 3


// for (let i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0]();// 1
// data[1]();// 2
// data[2]();// 3


// for (let i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0]();// 1
// data[1]();// 2
// data[2]();// 3



for (var i = 0; i < 3; i++) {
    data[i] = (function (k) {
        return () => {
            console.log(k)
        }
    })(i)
}

data[0]();// 1
data[1]();// 2
data[2]();// 3

