/*大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39*/

// 时间复杂度太高了
function Fibonacci(n) {
    if (n <= 0) return 0
    if (n == 1) return 1
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

// 代码通过
function Fibonacci1(n) {
    if (n <= 0) return 0
    else if (n === 1) return 1
    else {
        let last_1 = 0
        let last_2 = 1
        for (let i = 0; i < n; i++) {
            var pre = last_1 + last_2
            last_2 = last_1
            last_1 = pre
        }
        return pre
    }
}
console.log(Fibonacci(7), Fibonacci1(7))
