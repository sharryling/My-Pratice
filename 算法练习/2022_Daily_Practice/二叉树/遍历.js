

const { tree } = require('./define')
/**
 *    0
 *  1   2
 * 3 4  5 6
 */

/**
 * 
 * 递归式
 */
// 0 1 3 4 2 5 6
function preorder(root) {
    if(root) {
        console.log(root.val)
        preorder(root.left)
        preorder(root.right)
    }
}

// 3 1 4 0 5 2 6
function middleeorder(root) {
    if(root) {
        middleeorder(root.left)
        console.log(root.val)
        middleeorder(root.right)
    }
}

// 3 4 1 5 6 2 0
function aftereorder(root) {
    if(root) {
        aftereorder(root.left)
        aftereorder(root.right)
        console.log(root.val)
    }
}

// console.log(aftereorder(tree));



/**
 * 非递归式
 */
function preorder_non_recursive(root) {
    const stack = []
    const list = []
    stack.push(root)
    // let next
    while(stack.length > 0) {
        const cur = stack.pop()
        list.push(cur.val)
        // console.log(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return list
}
/**
 * 非递归式
 */
 function middleeorder_non_recursive(root) {
    const stack = []
    const list = []
    stack.push(root)
    let cur = root
    while(stack.length > 0) {
        console.log('cur',cur, list, stack);
        if(cur.left) {
            stack.push(cur)
            cur = cur.left
            continue;
        }
        list.push(cur.val)
        cur = stack[stack.length - 1 ]
        // list.push(cur.val)
        if(cur.left) {
            continue;
        }
        list.push(cur.val)
        stack.pop()
        if(cur.right) {
            cur = cur.right
            stack.push(cur)
        }
    }
    console.log('cur',list, stack);
    return list
}
var preorderTraversal = function(root) {
    // 初始化数据
    const res =[];
    const stack = [];
    while (root || stack.length){
      while(root){
        res.push(root.val);
        // stack存放到最左边的路径
        stack.push(root);
        // 这里都是为了root先到最左边！！
        root = root.left;
      }
      root = stack.pop();
      root = root.right;
    }
    return res;
};

console.log(preorder(tree));
console.log(preorder_non_recursive(tree));

// console.log(middleeorder(tree));
// console.log(middleeorder_non_recursive(tree));
