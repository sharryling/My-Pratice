/**
 * 
 */

new Promise((resolve, reject) => {
    resolve(1)
})

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
        cb(this.resolve.bind(this), this.reject.bind(this))
    }
    resolve(value) {
        if(this.status === pedding) {
            this.status = fullfiled
        }
        this.value = value
        this.cbFULLFILEDLIST.forEach(item => item(value))
    }
    reject(reason) {
        if(this.status === rejected) {
            this.status = rejected
        }
        this.reason = reason
        this.cbREJECTEDLIST.forEach(item => item(value))
    }
    then(onFULLFILTED, onREJECTED) {
        onFULLFILTED = typeof (onFULLFILTED) === 'function' ? onFULLFILTED : () => { }
        onREJECTED = typeof (onREJECTED) === 'function' ? onREJECTED : () => { }
        const promise2 = new Promise((res, rej) => {
            if(this.status === pedding) {
                setTimeout(()=>{
                    const result = onFULLFILTED(this.value)
                    handlePromise(result, promise2, res, rej)
                })
            }

        })
        

    }
}