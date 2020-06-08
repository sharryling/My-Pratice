function multi(x){
    var a = 1
    for(var i = 1;i <= x;i++){
        a *=i
    }
    return a
}
function jumpFloor(number)
{
    var N = Math.floor(number/2)+1
    var N_1 = number
    var resN = 0
    for(var i = N  ; i>0 ;i-- ){
        var N_2 = (number - N_1)/2
        resN += multi(N_1+N_2)/multi(N_1)/multi(N_2)
        N_1 = N_1 -2
        }
    return resN
}



//更好的方法  参考：
function jumpFloor(number)
{
    if (number < 2) {
        return 1
    }
    let arr = [1, 1]
    for (let i = 2; i <= number; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[number]
}


//一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function jumpFloorII(number)
{
    if(number <2 )return 1
    return jumpFloorII(number - 1)*2
}

console.log(jumpFloorII(3));






// 2020/5/11
console.log('_______________________');


function jumpFloorIII(number)
{
    if(number<=2) {
        return number
    }
    return jumpFloorIII(number - 1) + jumpFloorIII(number - 2)
}
console.log(jumpFloor(6));
console.log('sss:', jumpFloorIII(6));



function jumpFloorIV(n) {
    if(n <=2) {
        return n
    } else {
        let sumArr = [1, 2]
        for(let i = 0; i< n-2; i++) {
            let buf = sumArr[1]
            sumArr[1] = sumArr[0] + sumArr[1]
            sumArr[0] = buf
        }
        return sumArr[1]
    }
}

console.log('________青蛙变态跳__________');
function jumpFloorIV(number)
{
    if(number <=3) {
        return number
    } else {

    }
}

console.log(jumpFloorIV(4));
