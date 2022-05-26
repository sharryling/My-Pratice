function main(data) {
    return formatNumber(data.toString())
}

function formatNumber(data) {
    const len = data.length
    const firStr = len % 3 || 3
    const index  = Math.ceil(len/3)
    let str = ''
    for(let i = 0; i < index; i++) {
        if(i === 0) {
            str += data.substr(0, firStr) + ','
        } else {
            str += data.substr(firStr + (i - 1) * 3, 3) + ','
        }
    }
    return str.substr(0, str.length - 1)
}

console.log(main(123456789));
console.log(main(1234567890));