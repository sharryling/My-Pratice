function rgb2hex(sRGB) {
    var regE = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/
    var colorArr = sRGB.match(regE)
    if(!colorArr)return sRGB
    var res = '#'
    for(var i = 1 ; i<4 ; i++){
        if( 0 <= colorArr[i] && colorArr[i] <= 255){
            res = res.concat(Number(colorArr[i]).toString(16).padStart(2,'0'));
        }
        else return sRGB
    }
    return res
}
console.log(rgb2hex('9rgb(234,2,1)66'));
