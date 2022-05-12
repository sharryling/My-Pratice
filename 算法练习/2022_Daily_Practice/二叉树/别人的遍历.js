
// 作者：mengxiang
// 链接：https://leetcode.cn/problems/binary-tree-postorder-traversal/solution/die-dai-chao-jian-dan-qian-zhong-hou-er-b79fc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


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

/**
 * 中序
 * 后序遍历有点不太一样，但是套路是一样的，我们需要先遍历右子树，再遍历左子树，反着来，就可以了，代码如下：
 */
const inorderTraversal = (root) => {
  const res = [];
  const stack = [];
  while(root || stack.length){
      while(root){
          // stack存放到最左边的路径
          stack.push(root)
          // 这里都是为了root先到最左边！！
          root = root.left;
      }
     root = stack.pop();
     res.push(root.val);
     root = root.right;
  }
  return res;
};

/**
 * 后
 * https://leetcode.cn/problems/binary-tree-postorder-traversal/solution/er-cha-shu-de-hou-xu-bian-li-by-leetcode-solution/
 */
 var postorderTraversal = function(root) {
    const res = [], stack = []
     while (root || stack.length) {
         res.unshift(root.val)
         root.left && stack.push(root.left)
         root.right && stack.push(root.right)
         root = stack.pop()
         console.log('res', res);
     }
     return res
 };

const { tree } = require('./define')
console.log('tree', preorderTraversal(tree));
console.log('tree', inorderTraversal(tree));
console.log('tree', postorderTraversal(tree));