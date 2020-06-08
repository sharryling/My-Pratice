const aa = [25,565,2]
let outStack = [];
let isStack = [];
function push(node)
{
    isStack.length ++
    isStack[isStack.length - 1] = node
}
function pop()
{
    if(outStack.length > 0) {
        outStack.length --
    }
}

pop(aa)

console.log(aa);
