/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 牛牛现在有一个n个数组成的数列,牛牛现在想取一个连续的子序列,并且这个子序列还必须得满足:最多只改变一个数,
 * 就可以使得这个连续的子序列是一个严格上升的子序列,牛牛想知道这个连续子序列最长的长度是多少。
 * input: [7,2,3,4,1,5,6]
 * output: 5
 * @param nums int一维数组
 * @return int
 */
function maxSubArrayLength(nums) {
  // write code here
  let bufIndexList = [
    {
      index: 0,
      len: 1,
    },
  ];
  nums.forEach((item, index) => {
    if (index === 0) {
      return;
    }
    const lastOne = nums[index - 1];

    if (item !== lastOne + 1) {
      // 如果遇到不大于, 则记录位置
      bufIndexList.push({ index, len: 1 });
    } else {
      bufIndexList[bufIndexList.length - 1].len += 1;
    }
  });
  console.log("____", bufIndexList);
  let resMaxLen = 0;
  bufIndexList.forEach((item, index) => {
    const curLength = item.len;
    if (index >= bufIndexList.length - 2) {
      return;
    }
    const nextItem = bufIndexList[index + 2];
    if (
      bufIndexList[index + 1].len === 1 &&
      nextItem.len + item.len > resMaxLen
    ) {
        const curValue = nums[nextItem.index]
        const nextValue = nums[item.index + item.len - 1]
        if(curValue === nextValue + 1) {
            resMaxLen = nextItem.len + item.len;
        } else if(curValue === nextValue + 2) {
            resMaxLen = nextItem.len + item.len + 1
        } else {
            resMaxLen = item.len + 1;
        }
    } else if (item.len + 1 >= resMaxLen) {
      resMaxLen = item.len + 1;
    }
  });
  return resMaxLen;
  // numberMinList.some(item )
}

console.log("res: ", maxSubArrayLength([10,3,10,5,7]));
module.exports = {
  maxSubArrayLength: maxSubArrayLength,
};
