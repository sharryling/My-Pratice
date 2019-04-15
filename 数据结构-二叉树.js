/* 二叉树 */
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}
function show() {
    return this.data
}
function BST() {
    this.root = null;           // 根节点
    this.insert = insert;       // 插入节点
    /* this.preOrder = preOrder;   // 先序遍历
    this.inOrder = inOrder;     // 中序遍历
    this.postOrder = postOrder; // 后序遍历
    this.find = find;           // 查找节点
    this.getMin = getMin;       // 查找最小值
    this.getMax = getMax;       // 查找最大值
    this.remove = remove;       // 删除节点 */
}
//insert：向树中添加新节点
function insert(data) {
    var n = new Node(data, null, null)
    console.log("data = ",data);
    if (this.root === null) {
        this.root = n
    } else {
        let curNode = this.root
        while (true) {
            if (data < curNode.data) {
                console.log("curNode.data= ",curNode,curNode.left);
                curNode = curNode.left
                if (curNode === null) {
                    curNode = n
                    console.log("curNode = ",curNode);
                    break
                }
            }
            else {
                console.log(curNode.right);
                curNode = curNode.right
                
                if (curNode === null) {
                    curNode = n
                    
                    break
                }
            }
        }
    }
}
//中序遍历  左→根 → 右
//当node不为空，一直沿着左先遍历，
//中序
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left)
        console.log(node + ' ')
        inOrder(node.right)
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
console.log(nums)