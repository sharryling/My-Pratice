/* 注意  牛客网不用ES6新语法  esp： */
/* 牛客练习调试方法：与通过的代码相比，手动对比两个输入 */
function getUrlParam(sUrl, sKey) {
    var resObj = {}
    var key = new RegExp('[?#&]', 'g')
    var bufArr = sUrl.split(key)
    bufArr.shift()  
    bufArr.forEach(function(element) {
        var apart = element.split('=')
        if(apart[1]){  //判断是否有value
            if(resObj[apart[0]]){ //之前就存在
                if(typeof(resObj[apart[0]]) != "object"){ //之前不为数组
                    resObj[apart[0]] = new Array(resObj[apart[0]])
                }
                resObj[apart[0]].push(apart[1])
            }else{
                resObj[apart[0]] = apart[1]  //以字符串形式放入
            }
        }
    });
    if(sKey) return resObj[sKey] || ''
    else return resObj
}
var sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
console.log(getUrlParam(sUrl));