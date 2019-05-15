
function strLength(s, bUnicode255For1) {
    var resLength = 0
    if(bUnicode255For1)return 1
    for(var i = 0 ;i<s.length ; i++){
        if(s.charCodeAt(i) > 255) resLength = resLength + 2
        else resLength++
    }
    return resLength
}
console.log(strLength('hello world, 牛客', true));
