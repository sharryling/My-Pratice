/**
 * 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K>数组的长度，那么返回一个空的数组
 * @param {*} input
 * @param {*} k
 */
function GetLeastNumbers_Solution(input, k) {
    let list = []
  if (k > input.length || k===0) {
    return []
  } else if(k === input.length){
    return input.sort((a, b) => a - b)
  } else {
    input.forEach(item => {
        if(list.length < k) {
            list.push(item)
            return
        }
        if(item >= list[k-1]){
            return 
        }
        list.pop()
        list.push(item)
        list = list.sort((a, b) => a - b)
})
    return list
  }
}

console.log('>>,', GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],8))
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
}
