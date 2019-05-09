function multiply(num1, num2) {
    var buf
    var mulArr = []
    for (var i = num2.length - 1; i >= 0; i--) {

        for (var j = num1.length - 1; j >= 0; j--) {
            if(j = num1.length - 1){mulArr[j] = ''}
            // num1 与 num2的低位一位一位开始相乘，结果放到mulArr[j]的字符串中，缓存进位放在plus中
            var plus = 0 //进位
            var mulBuf = 0
            mulBuf = num1[j] * num2[i] + plus
            
            
            plus = Math.floor(mulBuf / 10)  //十位
            mulArr[j] += (mulBuf % 10).toString()
            //console.log(plus,mulBuf,mulArr[j]);
            if (j === 0) {
                //plus不为0,就放入mulArr[j]中
                mulArr[j] += plus
            }

        }
    }
    //console.log(mulArr);
    
}
multiply('36','93')
console.log("ddd");
