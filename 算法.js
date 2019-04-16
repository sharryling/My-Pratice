/* 斐那其列数列 */
function fn(n){
    if(n <= 0){
        return 0;
    }else if(n == 1){
        return 1
    }else{
        return fn(n-1)+fn(n-2);
    }
   }
//console.log("aa:",fn(1));
   

/* 冒泡 */

function bubbleSort(data){
    var length = data.length
    for(let i = 0 ;i<length;i++){
        for(let j = 0 ; j<length-1-i;j++){
            if(data[j]>data[j+1]){
                //交换
                let buf = data[j]
                data[j] = data[j+1]
                data[j+1] = buf
            }
        }
    }
}

/* selection */
function selectionSort(data){
    var length = data.length
    for(let i=0 ;i<length ;i++){
        let min = i
        for(let j=i ; j<length;j++){
            if(data[min]>data[j]){
                min = j
            }
        }
        let buf = data[i]
        data[i] = data[min]
        data[min] = buf
    }
    return data
}
var arr = [-2,14,6,2,3,1,5,-1,2.5]
console.log("原数组：",arr)
console.log("选择排序   O(n²) ：",selectionSort(arr));

/* 插入排序 */

function fastSort(data){
    var length = data.length
    for(let i = 0;i< length-1; i++){
        var current = data[i+1]
        let j =i
        while(j<0){
            if(data[j]>current){
               data[j+1]=data[j]
               j--
            }else{
                data[j] = current
                break;
            }
        }
    }
    return data
}
console.log("插入排序",fastSort(arr));



/* 快速排序 */