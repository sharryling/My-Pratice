/**
 * 给定一个数组arr，返回arr的最长无的重复子串的长度(无重复指的是所有数字都不相同)。
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  if (arr.length <= 1) {
    return arr;
  }
  let maxLength = 0;
  let bufferList = [];
  arr.forEach((item) => {
    let hasIndex = bufferList.indexOf(item);
    bufferList.push(item);
    if (hasIndex === -1) {
      return;
    }
    const strLength = bufferList.length - 1;
    maxLength < strLength && (maxLength = strLength);
    bufferList = bufferList.splice(hasIndex + 1, bufferList.length - 1);
  });
  return Math.max(bufferList.length, maxLength);
}
module.exports = {
  maxLength: maxLength,
};
