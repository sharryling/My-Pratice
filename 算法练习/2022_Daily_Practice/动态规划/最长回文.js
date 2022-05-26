/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
链接：https://leetcode.cn/problems/longest-palindromic-substring
 */
//  var longestPalindrome = function (s) {
//     let max = {
//         value: 0,
//         str: ''
//     }
//     function dp(a, b) {
//         if (a >= b) {
//             return a - 1 <= b ? 1 : 0
//         }
//         if (a === b - 1) {
//             if (s[a] === s[b]) {
//                 max.value < 2 && (max.str = s.substr(a, 2))
//                 return 2
//             } else {
//                 return 1
//             }
//         }
//         let res = 0
//         for (let i = a; i < b; i++) {
//             for (let j = i + 1; j < s.length; j++) {
//                 console.log('rrrrrr', i, j, s[i] === s[j], s)
//                 if (i === j - 1) {
//                     res = dp(i, j)
//                     continue;
//                 }
//                 if (s[i] !== s[j]) {
//                     continue;
//                 }
//                 const lastRes = dp(i + 1, j - 1)
//                 console.log('jjjj?', i, j, lastRes)
//                 if (lastRes > 0) {
//                     res = lastRes + 2
//                     if (res > max.value) {
//                         max.value = res
//                         max.str = s.substr(i, j - i + 1)
//                         console.log('2?', s, i, j)
//                         return res
//                     }
//                     if (max.str === s.length) {
//                         return s
//                     }
//                 }
//             }
//         }
//         return Math.max(1, res)
//     }
//     dp(0, s.length - 1)
//     return max.str || s[0]
// };


var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(false));//初始化数组 
    for(let i = 0;i <= n-1;i++){//循环字符串
        for(let j = i;j < n;j++){
        
        //dp[i][j]表示子串i～j是否是回文子串
          //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
          //j - i < 2表示子串小于等于1也是回文串
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
            // console.log('i, j', i,j, dp[i][j] );
            if(dp[i][j] && j - i +1 > res.length){//当前回文子串比之前的大，更新最大长度
                res = s.substring(i,j+1);
            }
            // console.log('res', res );
        }
    }
    return res;
};

console.log(longestPalindrome('aacaacd'));