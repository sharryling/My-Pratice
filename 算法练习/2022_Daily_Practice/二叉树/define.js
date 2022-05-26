let insertNode = (node, newNode) => {
  if (node.val > newNode.val) {
    if (node.left === null) {
      node.left = newNode.val
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode.val
    } else {
      insertNode(node.right, newNode)
    }
  }
}
let Tree = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

let list = []

/**
 *    0
 *  1   2
 * 3 4  5 6
 */

let tree = new Tree(0)
tree.left = new Tree(1)
tree.right = new Tree(2)
let treeBuf = tree.left
treeBuf.left = new Tree(3)
treeBuf.right = new Tree(4)
treeBuf = tree.right
treeBuf.left = new Tree(5)
treeBuf.right = new Tree(6)

exports.tree = tree

/**
// 前序遍历
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/solution/javascriptjie-qian-xu-bian-li-er-cha-shu-by-user77/
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function(root) {
  if(root) {
    preorderTraversal(root.left)
    list.push(root.val)
    preorderTraversal(root.right)
  }
  return list
};
