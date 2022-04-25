/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ListNode(x) {
  this.val = x;
  this.next = null;
}
var head = new ListNode(14);
/* console.log(head); */
head.next = new ListNode(22);
var a = head.next;
a.next = new ListNode(31);
a = a.next;
a.next = new ListNode(45);
// console.log(head);

function reverse(pBefore, pCurrent) {
  const pNext = pCurrent.next;
  pCurrent.next = pBefore;
  if (!pNext) {
    return pCurrent;
  }

  return reverse(pCurrent, pNext);
}
function ReverseList(pHead) {
  if (!pHead) {
    return pHead;
  }
  return reverse(null, pHead);
}

ReverseList(head);
module.exports = {
  ReverseList: ReverseList,
};
