const testList = [3, 4, 22, 1.4, 4, 8, 12, 4.4, 0, 43]

/**
 * 冒泡排序
 */

function bubbleSort(list) {
    const len = list.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
    return list
}



/**
 * 选择排序
 */
function selectSort(list) {
    const len = list.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            min = list[j] < list[min] ? j : min
        }
        if (min !== i) {
            [list[i], list[min]] = [list[min], list[i]]
        }
    }
    return list
}
// console.log(testList, selectSort(testList));

/**
 * 插入排序
 */


function insertSort(list) {
    const len = list.length
    for (let i = 1; i < len; i++) {
        let target = list[i]
        let j = i;
        while (j >= 0) {
            if (target < list[j - 1]) {
                list[j] = list[j - 1]
            } else {
                list[j] = target
                break;
            }
            j--;
        }
    }
    return list
}



/**
 * 快排
 * 一分为二，小扔左，大扔右【但其实这个middleIndex应该是个随机的，不一定是中间。】
 */

function fastSort(list) {
    const len = list.length
    if (len <= 1) {
        return list
    }
    const middleIndex = parseInt(len / 2) // parseInt(Math.random()*len)

    const middleItem = list.splice(middleIndex, 1)[0]
    const left = []
    const right = []
    list.forEach(item => {
        item < middleItem ? left.push(item) : right.push(item)
    })
    return [...fastSort(left), middleItem, ...fastSort(right)]
}

// console.log(fastSort(testList));

/**
 * 归并
 * 偶数次分，分完一块再排序
 */
function mergeSort(list) {
    const len = list.length
    if (len <= 1) {
        return list
    }
    const middleIndex = parseInt(len / 2)
    const left = mergeSort(list.slice(0, middleIndex))
    const right = mergeSort(list.slice(middleIndex))
    return count(left, right)

}

// 此时left和right已经是进行过内部排序的，是增序列，现在要进行外部排序
function count(left, right) {
    const newList = []
    let lIndex = 0, rIndex = 0
    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            newList.push(left[lIndex++])
        } else {
            newList.push(right[rIndex++])
        }
    }
    newList.push(...(lIndex > left.length - 1 ? right.splice(rIndex) : left.splice(lIndex)))
    return newList
}

console.log(insertSort(testList));

/**
 * 堆排序
 */