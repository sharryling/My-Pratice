/**
 * 实现一个new
 */

function Parent(name) {
    this.name = name
}
const parent = new Parent('jingjing')


/**
 * 1. 新生成一个对象
 * 2. 继承这个对象
 */
function createNew (object, ...arg) {

    const newObj = new Object()
    Con = [].shift.call(arguments)
    newObj.__proto__ = object.prototype
    const result = object.apply(newObj, arg)
    return result instanceof Object ? result : newObj
}