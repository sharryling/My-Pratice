/**
 * https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=188&&tqId=37378&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
function min(resList, A, B) {
    if (A.length === 0 || B.length === 0) {
      return A.length === 0 ? resList.concat(B) : resList.concat(A);
    } else {
      A[0] <= B[0]
        ? resList.push(A.splice(0, 1)[0])
        : resList.push(B.splice(0, 1)[0]);
  
      return min(resList, A, B);
    }
  }

function merge(A, m, B, n) {
  console.log("结果：", min([], A, B));
}
merge([0,1,3,5,5,7],6, [3,4,4,5,5,6,8], 7);
module.exports = {
  merge: merge,
};
