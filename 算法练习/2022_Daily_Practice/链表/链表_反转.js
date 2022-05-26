const { list1, list2, ListNode } = require('./链表_入参')

/**
 * 普通反转
 * @param {} head 
 * @returns 
 */
var reverseList = function (head) {
    let last = null
    let cur = head
    let next
    while (cur) {
        next = cur.next
        cur.next = last
        last = cur
        cur = next
    }
    console.log(head.printf())
    return last
};


// console.log(list2.printf(), reverseList(list2).printf())
console.log('=================================')

/**
 * 反转链表II
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
 */
 function reverseListNode(head) {
    let cur = head
    let last = null
    while(cur) {
        const next = cur.next
        cur.next = last
        last = cur
        cur = next
    }
    return last
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let newHead = new ListNode(-1)
    newHead.next = head
    let pre = newHead
    // pre指向leftNode前一个
    for(let i = 1; i< left; i++) {
        pre = pre.next
    }
    let leftNode = pre.next
    let rightNode = leftNode
    pre.next = null
    // pre指向leftNode前一个
    for(let i = 0; i< right - left; i++) {
        rightNode = rightNode.next
    }
    // rightNode为最后leftNode最后一个, nextNode为下一个
    let nextNode = rightNode ? rightNode.next : null
    rightNode.next = null

    pre.next = reverseListNode(leftNode)
    leftNode.next = nextNode
    return newHead.next
};
console.log(list2.printf(), reverseBetween(list2, 2, 4).printf())





