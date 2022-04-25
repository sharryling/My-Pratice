/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
https://edu.csdn.net/skill/algorithm/algorithm-03249b7fafaa44b397e0420c4ef851d8?category=196
 */

const { list1, list2, ListNode } = require('./链表_入参')

var swapPairs = function(head) {
    const newHead = new ListNode(-1)
    newHead.next = head
    let pre = newHead
    cur = pre.next
    while(cur && cur.next) {
        const next = cur.next
        pre.next = next
        pre = cur
        cur.next = next.next
        let buf = next.next
        next.next = cur
        cur = buf
    }
    return newHead.next
};
swapPairs(list1)