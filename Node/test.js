let aaa = 23
exports.aaa = aaa
let bbb = {
    aaa: 'aaab'
}
exports.bbb = bbb
exports.func = () => {
    aaa = aaa + 1
    bbb.ccc = 'weasfwe'
    console.log('i', aaa, bbb);
}