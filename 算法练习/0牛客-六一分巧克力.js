//  # 知识点： 贪心算法
//  # 题目：
/*六一儿童节，老师带了很多好吃的巧克力到幼儿园。每块巧克力j的重量为w[j]，对于每个小朋友i，
当他分到的巧克力大小达到h[i] (即w[j]>=h[i])，他才会上去表演节目。老师的目标是将巧克力分发给孩子们，
使得最多的小孩上台表演。可以保证每个w[i]> 0且不能将多块巧克力分给一个孩子或将一块分给多个孩子。*/
//  # 思路：
/*  1、排序w和h
    2、贪心算法，给每个w匹配当前最小的h，比较两者之间的大小
*/

const numH = Number(readline())
const H = readline().split(" ")
const numW = Number(readline())
const W = readline().split(" ")
var count = 0
var arrH = []
var arrW = []
for(let i=0;i<numH;i++){
    arrH[i]=Number(H[i]);
}
for(let i=0;i<numW;i++){
    arrW[i]=Number(W[i]);
}
function sortNumber(a,b)
{
return a - b
}
var sortH = arrH.sort(sortNumber)
var sortW = arrW.sort(sortNumber)

var k = 0;
for (let i = 0; i < numW; i++) {
    if(sortW[i]>=sortH[k]){
        count++
        k++
    }
    if(k>=numH)break;
}
print(count)



const hLen = numH
const h = arrH
const wLen = numW
const w = arrW
var count = 0
  
for(let i=0;i<hLen;i++){
    var j=h[i];
    h[i]=Number(j);
}
for(let i in w){
    w[i]=Number(w[i]);
}
for(let i=0;i<hLen;i++){
    for(let j=1;j<hLen;j++){
        if(h[j]<h[j-1]){
            var k=h[j-1];
            h[j-1]=h[j];
            h[j]=k;
        }
    }
}
for(let i=0;i<wLen;i++){
    for(let j=1;j<wLen;j++){
        if(w[j]<w[j-1]){
            var k=w[j-1];
            w[j-1]=w[j];
            w[j]=k;
        }
    }
}
console.log("res2 = ",biaoyan(h,w));
function biaoyan(array1,array2){
    var count=0;
    var array=[];
    for(let i in array1){
        var num=0;
        for(let j in array2){
            if(array1[i]<=array2[j]&&num==0){
                count++;
                num++;
            }else{
                array.push(array2[j]);
            }
        }
        array2=array;
        array=[];
        if(num==0){
            break;
        }
        if(array2.length==0){
            break;
        }
    }
    return count;
}