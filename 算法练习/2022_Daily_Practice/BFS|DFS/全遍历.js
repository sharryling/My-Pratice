/**
 * 1, 2, 3, 4全排列问题
 * 
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择

 * https://mp.weixin.qq.com/s/nMUHqvwzG2LmWA9jMIHwQQ
 */
function mainAllSort(list) {
    let res = []
    function allSort(list, stack = []) {
        // 这里为递归停止的位置
        if (stack.length === list.length) {
            res.push([...stack])
            return
        }
        for (let i = 0; i < list.length; i++) {
            // 这里排除选项
            if (stack.includes(list[i])) {
                continue;
            }
            // 这里进行选项
            stack.push(list[i])
            allSort(list, stack)
            // 这里进行选项后推出选项，进行其他选项。
            stack.pop()
        }
        return res
    }
    return allSort(list)
}
console.log('->', mainAllSort([1, 2, 3, 4]));


/**
 * 八皇后问题
    n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
    给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
    每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
    ===>>> 即，同行同列及斜对角都没有Q.
    链接：https://leetcode.cn/problems/n-queens
 */
function inInvalide(index, n, stack) {
    const curCol = stack.length
    for(let i = 0;i < stack.length; i++) {
        if(stack[i][index] === 'Q') {
            return true
        }
        const threshold = curCol - i
        const targetIndex1 = index - threshold
        const targetIndex2 = index + threshold
        if(targetIndex1 >= 0 && targetIndex1 <= n -1 && stack[i][targetIndex1] === 'Q') {
            return true
        }
        if(targetIndex2 >= 0 && targetIndex2 <= n -1 && stack[i][targetIndex2] === 'Q') {
            return true
        }
    }
    return false
}

function mainNQueen(n) {
    let res = []
    function nQueen(n, stack=[]) {
        if (stack.length === n) {
            res.push([...stack])
            return
        }
        for (let i = 0; i < n; i++) {
            // 不满足条件的皇后
            if (inInvalide(i, n, stack) ) {
                continue;
            }
            let str = ''
            for(let j = 0; j< n ; j++) {
                str += i === j ? 'Q' : '.'
            }
            stack.push(str)
            nQueen(n, stack)
            stack.pop()
        }
        return res
    }
    return nQueen(n)
}

console.log('=>>', mainNQueen(4))