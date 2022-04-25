/**
 * 给定一个只包含A、B、C三个字符的字符串，
 * 返回其中包含A、B、C这三个字符的最短子串的长度，如果不存在该子串，请返回0。
 *
 * input: 'AABBBBCCA'
 * output: 4
 * @param s string字符串 代表题中所述字符串
 * @return int整型
 */

// function mainLogic(str, minLength = Infinity) {
//   if (str.length < 3) {
//     return Infinity;
//   }
//   const commonFirstIndex = [0, 0, 0];
//   const flagList = [false, false];
//   const valueList = [];
//   let res = 0;
//   str.split("").some((item, index) => {
//     // 标志一位
//     // if(index > str.length - 3) {return true}
//     if (!flagList[0] && item !== str[0]) {
//       console.log("aa");
//       valueList.push(str[0]);
//       commonFirstIndex[0] = index - 1;
//       flagList[0] = true;
//       commonFirstIndex[1] = index;
//     }
//     // 标志二位
//     const secondOne = str[commonFirstIndex[1]];
//     if (!flagList[1] && item !== secondOne) {
//       console.log("bb");
//       valueList.push(secondOne);
//       commonFirstIndex[1] = index - 1;
//       flagList[1] = true;
//       commonFirstIndex[2] = index;
//     }
//     if (flagList[0] && flagList[1]) return true;
//   });

//   const thirdOne = str[commonFirstIndex[2]];
//   console.log("---", commonFirstIndex, minLength, commonFirstIndex[1] - commonFirstIndex[0] + 2);
//   if (flagList[0] && flagList[1]) {
//     if (valueList.indexOf(thirdOne) > -1) {
//       res = Math.min(commonFirstIndex[1] - commonFirstIndex[0] + 2, minLength);
//     }
//     res = Math.min(
//       mainLogic(str.substring(commonFirstIndex[2], str.length), res),
//       minLength
//     );
//   }

//   return res;
// }
function findMinLength(s) {
  // write code here

  return mainLogic(s);
}

console.log("....", findMinLength("AABBBBCCA"));
module.exports = {
  findMinLength: findMinLength,
};
