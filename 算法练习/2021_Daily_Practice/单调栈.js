/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 给定一个可能含有重复值的数组 arr，找到每一个 i 位置左边和右边离 i 位置最近且值比 arr[i] 小的位置。返回所有位置相应的信息。位置信息包括：两个数字 L 和 R，如果不存在，则值为 -1，下标从 0 开始。
 *
 * input: [3,4,1,5,6,2,7]
 * out: [[-1,2],[0,2],[-1,-1],[2,5],[3,5],[2,-1],[5,-1]]
 * @param nums int一维数组
 * @return int二维数组
 */

function foundLeftMin(leftList, val) {
  for (let i = leftList.length; i >= 0; i--) {
    if (leftList[i] < val) {
      return  i;
    }
  }
  return -1;
}

function foundRightMin(rightList, val) {
  for (let i = 0; i < rightList.length; i++) {
    if (rightList[i] < val) {
        console.log('____', rightList[i], val)
      return  i;
    }
  }
  return -1;
}

function foundMonotoneStack(nums) {
  // write code here
  return nums.map((item, index) => {
    const leftList = nums.slice(0, index);
    const rightList = nums.slice(index+ 1, nums.length)
    const rightIndex = foundRightMin(rightList, item, index)
    return [foundLeftMin(leftList, item), rightIndex === -1 ? -1 : index + 1 + rightIndex]
  });
}

console.log("结果:", foundMonotoneStack([73902,-4308,-32908,72676,-80410,84821,81293,90831,50552,48410,-96652,97227,59037,73268,64127,86461,73983,30394,-92583,51249,23782,-2562,-57096,-6345,-14200,-66972,-60564,7165,-59485,-2940,2438]));
module.exports = {
  foundMonotoneStack: foundMonotoneStack,
};
