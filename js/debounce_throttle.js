/**
 * debounce
 * immediate=true时，我们立即执行 cb ，并在 wait 时间内锁住 cb 的执行，
 *  wait 时间之后停止后，再触发，才会重新执行 fn
 */

function debounce(cb, wait, immediate) {
    let timer = null;
    let result
    const debounce = (...arg) => {
        const context = this
        // 多次触发会停止，直到“操作结束后”
        timer && clearTimeout(timer)
        if (immediate) {
            var callNow = !timer;
            // 这里顺序不能和if(callNow)换，如果换了，就得先执行完cb，再开始技术了
            timer = setTimeout(() => {
                timer = null
            }, wait);
            if (callNow) {
                result = cb && cb.apply(context, arg)
            }
        } else {
            timer = setTimeout(() => {
                result = cb && cb.apply(context, arg)
            }, wait);
        }
        return result
    }
    return debounce
}
/**
 * 由上面简写：
 */
function debounce(cb, wait, immediate) {
    let timer = null;
    let result
    const debounce = (...arg) => {
        timer && clearTimeout(timer)
        const context = this
        const later = () => {
            timer = null
            !immediate && (result = cb && cb.apply(context, arg))
        }
        // 多次触发会停止，直到“操作结束后”
        const callNow = !timeout && immediate;
        timer = setTimeout(later, wait);
        // 这里顺序不能和if(callNow)换，如果换了，就得先执行完cb，再开始技术了
        callNow && (result = cb && cb.apply(context, arg))
        return result
    }
    debounce.call = () => {
        clearTimeout(timer)
        timer = null;
    }
    return debounce
}


// DEMO
// 执行 debounce 函数返回新函数
const betterFn = debounce(() => console.log('fn 防抖执行了'), 1000, true)
// 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
document.addEventListener('scroll', betterFn)


const throttle = (fn, wait = 50) => {
    // 上一次执行 fn 的时间
    let previous = 0
    // 将 throttle 处理结果当作函数返回
    return function(...args) {
      // 获取当前时间，转换成时间戳，单位毫秒
      let now = +new Date()
      // 将当前时间和上一次执行函数的时间进行对比
      // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
      if (now - previous > wait) {
        previous = now
        fn.apply(this, args)
      }
    }
  }


/**
 * throttle https://github.com/sisterAn/JavaScript-Algorithms/issues/92
 * hrottle本质也是一个定时器，在第一次触发事件的时候，开启定时器，
 * 在定时器执行完毕之前，系统会锁住，新触发的事件都不会执行；
 * 定时器执行完毕之后，销毁定时器，系统开放，接受新的事件。
 * 
 */
function throttle(cb, wait, options = {}) {
    let timer, result, previous = 0, context, args;
    return () => {
        context = this;
        args = arguments;
        let now = +new Date();
        if (now - previous > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            previous = now
            result = cb && cb.apply(context, args)
            if (!timer) {
                context = args = null;
            }
        }
        return result
    }
}
/**
 * https://muyiy.cn/blog/7/7.5.html#%E5%BC%95%E8%A8%80
 * 默认是leading = false, trailing = true
 * 配置是否需要响应事件刚开始的那次回调（ leading 参数，false 时忽略）
 * 配置是否需要响应事件结束后的那次回调（ trailing 参数，false 时忽略）
 */
function throttle(cb, wait, options = {}) {
    let timer, result, previous = 0, context, args;
    const { leading, trailing } = options
    const later = () => {
        // leading = false时，每次触发回调函数后设置 previous 为 0
        previous = leading === false ? 0 : +new Date();

        // 防止内存泄漏，置为 null 便于后面根据 !timeout 设置新的 timeout
        timer = null;

        // 执行函数
        result = cb.apply(context, args);
        if (!timer) context = args = null;
    }
    return () => {
        context = this;
        args = arguments;
        let now = +new Date();

        // 第一次执行时（此时 previous 为 0，之后为上一次时间戳）
        // 并且设置了 { leading: false }（表示第一次回调不执行）
        // 此时设置 previous 为当前值，表示刚执行过，本次就不执行了
        if (!previous && leading === false) previous = now;

        const remaining = wait - (now - previous)

        // 要么是到了间隔时间了，随即触发方法（remaining <= 0）
        // 要么是没有传入 {leading: false}
        if (remaining <= 0 || remaining > wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            previous = now
            cb && cb.apply(context, args)
        } else if (!timer && trailing !== false) {
            // 最后一次需要触发的情况
            // 不存在一个定时器 && trailing = true
            // 间隔 remaining 后触发 later 方法
            timer = setTimeout(later, remaining);
        }
    }
}