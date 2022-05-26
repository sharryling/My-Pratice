/**
 * 
 */

new Promise((resolve, reject) => {
    resolve(1)
})

function handlePromise(result, promise, resolve, reject) {
    if(typeof result !== 'function' ) {
        resolve(result)
    }
}
let pedding = '1'
let fullfiled = '2'
let rejected = '3'
class Promise {
    cbFULLFILEDLIST = []
    cbREJECTEDLIST = []
    constructor(cb) {
        this.status = pedding
        this.value = undefined
        this.reason = undefined
        try {
            cb(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject.bind(this)(error)
        }
    }
    resolve(value) {
        if(this.status === pedding) {
            this.status = fullfiled
        }
        this.value = value
        this.cbFULLFILEDLIST.forEach(func => func())
    }
    reject(reason) {
        if(this.status === rejected) {
            this.status = rejected
        }
        this.reason = reason
        this.cbREJECTEDLIST.forEach(func => func())
    }
    then(onFULLFILTED, onREJECTED) {
        onFULLFILTED = typeof (onFULLFILTED) === 'function' ? onFULLFILTED : () => { }
        onREJECTED = typeof (onREJECTED) === 'function' ? onREJECTED : () => { }
        const promise2 = new Promise((res, rej) => {
            if(this.status === pedding) {
                setTimeout(()=>{
                    this.cbFULLFILEDLIST.push(() => {
                        setTimeout(() => {
                            const result = onFULLFILTED(this.value)
                            handlePromise(result, promise2, res, rej)
                        }, 0);
                    })
                    this.cbREJECTEDLIST.push(() => {
                        setTimeout(() => {
                            const result = onREJECTED(this.value)
                            handlePromise(result, promise2, res, rej)
                        }, 0);
                    })
                })
            }
            if(this.status === fullfiled) {
                setTimeout(()=>{
                    const result = onFULLFILTED(this.value)
                    handlePromise(result, promise2, res, rej)
                })
            }
            if(this.status === rejected) {
                setTimeout(()=>{
                    const result = onREJECTED(this.value)
                    handlePromise(result, promise2, res, rej)
                })
            }
        })
        

    }
}