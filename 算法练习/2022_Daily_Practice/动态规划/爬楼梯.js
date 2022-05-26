/**
 * @param {number} n
 * @return {number}
 */

 var climbStairs = function(n) {
    let memo =  {}
    return dp(n, memo)
};
/**
base case;
for 
dp dp(n) = dp(n-1/2) + 1
*/
function dp(n, memo) {
    if(n <= 1) {
        return 1
    }
    if(memo[n]) {
        return memo[n]
    }
    memo[n] = dp(n - 1, memo) + dp(n - 2, memo)
    return memo[n]
}