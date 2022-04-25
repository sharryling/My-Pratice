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

// 应该是可以，但是new ListNode 牛客没通过
function ReverseList(pHead)
{
    let pNode = new ListNode(pHead.val)
    let buf = {}
    buf = pHead 
    pNode.next = null
    console.log(pNode, buf);
    
    while(buf.next) {
        let bufL = pNode
        pNode = new ListNode(buf.next.val)
        pNode.next = bufL
        buf = buf.next
    }
    return pNode
}


function ReverseList2(pHead)
{
    let pNode = pHead
    let buf = null
    buf = pHead 
    pNode.next = null
    console.log(pHead, pNode, buf);
    
    // while(buf.next) {
    //     let bufL = pNode
    //     pNode = new ListNode(buf.next.val)
    //     pNode.next = bufL
    //     buf = buf.next
    // }
    return pNode
}
//ReverseList(head)
ReverseList2(head)
