function ListNode(x){
    this.val = x;
    this.next = null
}
var head = new ListNode(1)
/* console.log(head); */
head.next = new ListNode(2)
var a = head.next
a.next = new ListNode(3)
a = a.next
a.next = new ListNode(4)
console.log(head);
function printListFromTailToHead(head)
{
    
}

console.log(printListFromTailToHead(head));
