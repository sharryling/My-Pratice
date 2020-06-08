function Fibonacci(n)
{
    if(n === 1 || n === 0)
        return n
    else {
        return Fibonacci(n-1) + Fibonacci(n-2)
    }

}

function Fibonacci_2(n) {
    if(n <=1) {
        return n
    } else {
        let sumArr = [0, 1]
        for(let i = 0; i< n-1; i++) {
            let buf = sumArr[1]
            sumArr[1] = sumArr[0] + sumArr[1]
            sumArr[0] = buf
        }
        return sumArr[1]
    }
}



console.log(Fibonacci(15));
console.log(Fibonacci_2(15));
