




function debounce(cb, wait) {
    let timer = null, result
    const func = (...arg) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            result = cb && cb.apply(this, arg)
        }, wait);
        return result
    }
    return func
}

const betterFn = debounce((res) => console.log('fn 防抖执行了', res), 1000, true)
// 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
document.addEventListener('scroll', betterFn)



function throttle(cb, wait=0) {
    let timer = null, result, previous = 0
    return (...arg) => {
        const curTime = +new Date()
        if(curTime - previous > wait) {
            previous = curTime
            cb && cb.apply(this, arg)
        }
    }
}