//error
function multiply(num1, num2) {
    var mulArr = []
    var len1 = num1.length
    var len2 = num2.length
    var res = ''
    for (var i = len2 - 1; i >= 0; i--) {
        var plus = 0 //进位
        for (var j = len1 - 1; j >= 0; j--) {
            if (j === len1 - 1) { mulArr[i] = '' }
            // num1 与 num2的低位一位一位开始相乘，结果放到mulArr[j]的字符串中，缓存进位放在plus中
            var mulBuf = 0
            mulBuf = num1[j] * num2[i] + plus
            plus = Math.floor(mulBuf / 10)  //十位
            mulArr[i] += (mulBuf % 10).toString()
            //console.log(plus, mulBuf, mulArr[i]);
            //plus不为0,就放入mulArr[j]中
            if (j === 0 && plus !== 0) mulArr[i] += plus
        }
        //mulArr[i] = mulArr[i].split('').reverse().join('')
        for (var k = len1 - 1 - i; k < len1 - 1; k++)
            mulArr[i] = '0' + mulArr[i]
        mulArr[i] = mulArr[i].padEnd(len2 + len1 - 1, '0')

    }
    console.log(mulArr);

    for (var i = 0; i < len2 + len1 - 1; i++) {
        var addPlus = 0
        var addBuf = 0
        for (var j = 0; j < i + 1; j++) {
            addBuf += Number(mulArr[j][i])
            //console.log(addBuf,Number(mulArr[j][i]));
            
            
            if(j === 2)break;
        }
        addPlus = Math.floor(addBuf / 10)  //十位
            res += (addBuf % 10).toString()  //个位
            console.log(mulArr[j][i], (addBuf % 10).toString(), addPlus);
        //if (i == len1 + len2 - 1) res += addPlus

    }
    console.log(res)
}
multiply('236', '392')
