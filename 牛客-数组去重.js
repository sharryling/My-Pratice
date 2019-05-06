Array.prototype.uniq = function () {
    var bufObj = {}
    var resArr = []
    this.forEach(function(element){
        if( typeof(element) !="object" || element===null ){
            /* if(isNaN(element) ){
                console.log("2:",element,isNaN(element));
                if(bufObj[element] == null){  //第一次出现，就放入resArr里面
                    bufObj[element] = true
                    resArr.push(element)
                }
            }else */{
                console.log("1:",element,element == element);
            
                if(bufObj[element] == null){  //第一次出现，就放入resArr里面
                    bufObj[element] = true
                    resArr.push(element)
                }
            }
            
        }
        else{
            console.log("error=",element);
            resArr.push(element)
        }
    })
    return resArr
}
//var arr = new Array(false, true, undefined,undefined,undefined,null, null, NaN,function(){},function(){}, 0, 1, {}, {},[],[], 'a', 'a', NaN,'','',[2,6,52,2,5],[2,6,52,2,5],true,)
var arr = new Array(false,false, true, undefined,undefined, null,null,NaN, NaN, 0, 1, {}, {},[],[],Function(){}, 'a', 'a', NaN)


Array.prototype.uniq1 = function () {
   var resArr = [];
   var flag = true;
     
   for(var i=0;i<this.length;i++){
       if(resArr.indexOf(this[i]) == -1){
           if(this[i] != this[i]){   //排除 NaN
              if(flag){
                   resArr.push(this[i]);
                   flag = false;
              }
           }else{
                resArr.push(this[i]);
           }
       }
   }
    return resArr;
} 
console.log("result =",arr.uniq());
 console.log("result1 =",arr.uniq1()); 
console.log("44 = ",{}=={});
