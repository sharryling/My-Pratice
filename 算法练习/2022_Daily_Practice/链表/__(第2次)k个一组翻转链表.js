/**
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
 */

const { list1, ListNode } = require('./链表_入参')

function reverse(node) {
    // 翻转
    let cur = node
    let last = null
    while (cur) {
        let buf = cur.next
        cur.next = last
        last = cur
        cur = buf
    }
    return last
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const newHead = new ListNode(-1)
    newHead.next = head
    let cur = head
    let left = newHead
    while (cur) {
        let firstNode = cur
        let lastNode = null
        let right
        for (let i = 0; i < k; i++) {
            if (cur) {
                if (i === k - 1) {
                    lastNode = cur
                }
                cur = cur.next
            }
        }
        // right = cur
        if (lastNode) {
            right = lastNode.next
            lastNode.next = null
        }
        left.next = null
        console.log('right', firstNode, right)
        const newNode = reverse(firstNode)
        // if(firstNode) {
            firstNode.next = right
        // }
        console.log('newNode', newNode)
        left.next = newNode
        left = cur
    }
    return newHead.next

};
console.log(list1.printf());
console.log(reverseKGroup(list1, 2).printf());
