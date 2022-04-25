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

var reverseBetween = function (head, left, right) {
    if (!head || !head.next) {
        return head
    }
    let cur = head;
    let next = null, last = null;
    let index = 1;
    let leftOne = null;

    while (index <= right) {
        if (index < left) {
            if (index === left - 1) {
                leftOne = cur;
            }
            cur = cur.next
            index++
            continue;
        }
        // if(index === right) {
        //     index++
        //     continue;
        // }
        next = cur.next
        cur.next = last
        last = cur
        cur = next
        index++
        console.log('leftOne2', leftOne.printf(), cur && cur.printf())
    }
    leftOne.next = last
    console.log('==>', leftOne.printf(), last.printf(), next && next.printf())
    // last.next = next
    return head
}
console.log(list2.printf(), reverseBetween(list2, 2, 4).printf())