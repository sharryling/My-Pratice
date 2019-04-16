/* 二叉树 */
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;           // 根节点
    this.insert = insert;       // 插入节点
    this.preOrder = preOrder;   // 先序遍历
    this.inOrder = inOrder;     // 中序遍历
    this.postOrder = postOrder; // 后序遍历
    this.find = find;           // 查找节点
    this.getMin = getMin;       // 查找最小值
    this.getMax = getMax;       // 查找最大值
    this.remove = remove;       // 删除节点 
}
//insert：向树中添加新节点
function insert(data) {
    var n = new Node(data, null, null)
    if (this.root === null) {
        this.root = n
    } else {
        var curNode = this.root
        while (true) {
            if (data < curNode.data) {
                if (curNode.left === null) {
                    curNode.left = n
                    break
                }
                curNode = curNode.left
            }
            else {
                if (curNode.right === null) {
                    curNode.right = n
                    break
                }
                curNode = curNode.right
            }
        }
    }
}
//中序遍历  左→根 → 右
//当node不为空，一直沿着左先遍历，
//中序
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left)
        console.log(node.show() + ' ')
        inOrder(node.right)
    }
}
//前序 
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + ' ')
        preOrder(node.left)
        preOrder(node.right)
    }
}
//后序
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show() + ' ')
    }
}

var nums = new BST();
//插入数据
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(45);
nums.insert(-1);
/* console.log('Node： /n ');
console.log(nums.root)
console.log('\n 前序 /n ');
preOrder(nums.root);
console.log('\n 中序 /n ');
inOrder(nums.root)
console.log('\n 后序 /n ');
postOrder(nums.root) */

/* 二叉树查找 */
//查找最小值
function getMin() {
    var current = this.root
    while (current.left !== null) {
        current = current.left
    }
    return current.show()
}
//查找最大值
function getMax() {
    var current = this.root
    while (current.right !== null) {
        current = current.right
    }
    return current.show()
}
/* console.log('min:',nums.getMin())
console.log('max:',nums.getMax())
 */

/* find */
function find(data) {
    var current = this.root
    while (current !== null && current.data !== data) {
        if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    if (current === null) return null
    return current
}
console.log('find result：', nums.find(45));


/* remove */
function remove() {

}