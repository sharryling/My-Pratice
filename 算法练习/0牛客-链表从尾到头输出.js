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



console.log('_________________________');

// 2020/5/9
function nodeList(Val) {
    this.val = Val
    this.next = null
}
const testNode = new nodeList('123')
testNode.next = new nodeList('345')
testNode.next.next = new nodeList('567')
console.log(testNode);



function printListFromTailToHead(head)
{
    const reverseNode = []
    let currNode = head
    while(currNode) {
        reverseNode.push(currNode.val)
        currNode = currNode.next
    }
    //console.log(reverseNode);
    
    return reverseNode.reverse()
}

console.log(printListFromTailToHead(head));
