/**
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
 */

const { list1, ListNode} = require('./链表_入参')
console.log(list1.printf());
function reverse(head) {
    let cur = head;
    let last = null;
    while(cur) {
        const next = cur.next;
        cur.next = last;
        last = cur;
        cur = next
    }
    return last
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    let newHead = new ListNode(-1)
    newHead.next = head
    let pre = newHead
    let leftNode =  newHead.next
    let rightNode = newHead.next
    while(rightNode) {
        let bufLeft
        // 一、这部分主要：
        // 1. 看是否在k个里面，不在直接return
        // 2. 截取leftNode到rightNode; bufLeft为下一个开头
        for(let i = 0; i< k; i++ ) {
            if(!rightNode) {
                return newHead.next
            };
            if(i === k - 1) {
                bufLeft = rightNode.next
                rightNode.next = null
            }
            rightNode = rightNode.next
        }

        // 二、反转局部的leftNode, 并把后面原本的bufLeft赋值上去
        const newReversed = reverse(leftNode)
        leftNode.next = bufLeft
        // 三、衔接到pre
        pre.next = newReversed

        // 四、pre指向leftNode尾部
        pre = leftNode
        // 五、重新开始计算
        leftNode = bufLeft
        rightNode = bufLeft
    }
    return newHead.next
};
console.log('-->', reverseKGroup(list1, 3).printf())