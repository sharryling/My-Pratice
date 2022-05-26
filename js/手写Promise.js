/**
 * 1. new Promise((resolve, reject) => {})，两个入参，且方法错误直接reject
 * 2. 有3种状态，pending -> fullfiled/rejected 
 * 3. .then(onFULLFILTED, onREJECTED)：(1)函数/非函数判断 (2) 可以是异步的 (3) then是异步的
 * 4. resolve和reject是事件执行最后才执行的。即需要有setTimeout(()=> {resolve()})
 * 5. .then 返回新的Promise
 *  5.1 return的是非函数
 *  5.2 return的是异步函数/非异步函数
 * 6. 在所有可能出现问题的地方加try/catch，例如第1点，方法错误直接reject，其他下面先不加try/catch，显得太乱
 */

const handlePromise = (result, promise2, resolve, reject) => {
    // 自己等待自己完成是错误的实现
    if(result === promise2) {
        throw new Error('cannot return oneself')
    }
    if(typeof(result) === 'object' && result !== null || typeof(result) === 'function'  ) {
        if(typeof(result.then) === 'function') {
            result.then.call(result, r => handlePromise(r, promise2, resolve, reject), e => reject(e))
        } else {
            resolve(result)
        }
    } else {
        resolve(result)
    }
}
class Promise {
    static PEDDING = '执行'
    static FULLFILED = '成功'
    static REJECTED = '失败'
    status = Promise.PEDDING
    value = undefined
    reason = undefined
    cbFULLFILEDLIST = []
    cbREJECTEDLIST = []
    constructor(callback) {
        this.status = Promise.PEDDING
        /**
         * resolve不适合放在外面的方法，实例好像没有暴露这个方法
         * Promise.resolve(42);
            // 等同于
            new Promise(function(resolve){
                resolve(42);
        });
         */
        function resolve(value) {
            if (this.status === Promise.PEDDING) {
                this.status = Promise.FULLFILED
            }
            this.value = value
            this.cbFULLFILEDLIST.forEach(cb => cb())
        }
        function reject(reason) {
            if (this.status === Promise.PEDDING) {
                this.status = Promise.REJECTED
            }
            this.reason = reason
            this.cbREJECTEDLIST.forEach(cb => cb())
        }

        try {
            callback(resolve.bind(this), reject.bind(this))
        } catch (error) {
            this.reject.bind(this)(error)
        }
    }
    
    then(onFULLFILTED, onREJECTED) {
        onFULLFILTED = typeof (onFULLFILTED) === 'function' ? onFULLFILTED : () => { }
        onREJECTED = typeof (onREJECTED) === 'function' ? onREJECTED : () => { }

        const promise2 = new Promise((resolve, reject) => {
            if (this.status === Promise.FULLFILED) {
                setTimeout(() => {
                    const result = onFULLFILTED(this.value)
                    handlePromise(result, promise2, resolve, reject)
                })
            }
            if (this.status === Promise.REJECTED) {
                setTimeout(() => {
                    const result = onREJECTED(this.reason)
                    handlePromise(result, promise2, resolve, reject)
                })
            }
            if (this.status === Promise.PEDDING) {
                this.cbFULLFILEDLIST.push(() => {
                    setTimeout(() => {
                        const result = onFULLFILTED(this.value)
                        handlePromise(result, promise2, resolve, reject)
                    });
                })
                this.cbREJECTEDLIST.push(() => {
                    setTimeout(() => {
                        const result = onREJECTED(this.reason)
                        handlePromise(result, promise2, resolve, reject)
                    });
                })
            }
            // })
        })
        return promise2
    }
}


console.log('Step 1');
const promise = new Promise((resolve, reject) => {
    console.log('Step 2')
    // reject('error 我出来了')
    console.log('Step 4')
    setTimeout(() => {
        resolve('我出来了')
    }, 1000);
}).then((res) => {
    console.log('then 1', res)
}).then(res => {
    console.log('then 2')
})
console.log('Step 3');
