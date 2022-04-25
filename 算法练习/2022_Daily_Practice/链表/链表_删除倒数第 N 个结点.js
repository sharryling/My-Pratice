var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(-1)
    newHead.next = head
    let slow = newHead
    let fast = newHead
    for(let i = 0 ; i< n; i++) {
        fast = fast.next
    }
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    if(slow && slow.next) {
        slow.next = slow.next.next
    }
    return newHead.next
};