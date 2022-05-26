/**
 * debouce: wait时间操作内不触发，停止并且过了wait后触发
 */

function debounce(cb, wait, immediate) {
    let timer, result
    const context = this
    return (...arg) => {
        if(timer) {
            clearTimeout(timer)
            timer = null
        }

        if(!immediate) {
            timer = setTimeout(() => {
                result = cb && cb.apply(context, arg)
            }, wait);
        } else {
            const callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait);

            if(callNow) {
                result = cb && cb.apply(context, arg)
            }
        }

        return result
    }
}


/**
 * throttle： wait时间只触发一次
 */
function throttle(cb, wait) {
    let lastTime = 0
    const context = this
    return (...arg) => {
        const curTime = +new Date()
        if(curTime - lastTime > wait) {
            cb && cb.apply(context, arg)
            lastTime = curTime
        }
    }
}


document.addEventListener('scroll', throttle((e) => {
    console.log('clickkkk', e);
}, 1000))