function cssStyle2DomStyle(sName) {
    var resStr = ''
    var buf =[]
    if(sName[0] == '-'){
        sName = sName.replace('-','')
    }
    if(buf = sName.split('-')){
        resStr = resStr + buf[0]
        //console.log(buf, buf[0]);
        for(var i = 1; i<buf.length ; i++){
            resStr = resStr + buf[i][0].toUpperCase() + buf[i].slice(1,)
        }
        return resStr
    }else return sName
}

var str = 'webkitb-a4s3orde-rimage'
console.log(cssStyle2DomStyle(str));
