function ListNode(x){
    this.val = x;
    this.next = null
}
var head = new ListNode(14)
/* console.log(head); */
head.next = new ListNode(22)
var a = head.next
a.next = new ListNode(31)
a = a.next
a.next = new ListNode(45)
console.log(head);
function printListFromTailToHead(head)
{
    let ArrayList = []
    let preNode = head
    while(preNode){
        ArrayList.push(preNode.val)
        preNode = preNode.next
    }
    return ArrayList.reverse()
}

console.log("aa = ",printListFromTailToHead(head));
