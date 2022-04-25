/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param n long长整型 老师给牛牛的数字
 * @return int整型
 */

function mathexp( n ) {
    // write code here
    const intList = n.toString().split('')
    let count = 1
    intList.forEach(item => count *= item)
    if(count === n) { return n}
    return mathexp(count)

}

console.log('_____mathexp', mathexp(22))
module.exports = {
    mathexp : mathexp
};