
function ListNode(x) {
    this.val = x;
    this.next = null;
    const print = (node, list) => {
        list.push(node.val)
        if(!node.next) {
            // list.push(node.val)
            return node.val
        }
        return print(node.next, list)
    }
    this.printf = () => {
        const list = []
        print(this, list)
        return list
    }
}
var list1 = new ListNode(14);
/* console.log(head); */
list1.next = new ListNode(22);
var b = list1.next;
b.next = new ListNode(31);
b = b.next;
b.next = new ListNode(45);
b = b.next;
b.next = new ListNode(55);
b = b.next;
b.next = new ListNode(25);
b = b.next;
b.next = new ListNode(75);

var list2 = new ListNode(13);
/* console.log(head); */
list2.next = new ListNode(14);
var a = list2.next;
a.next = new ListNode(24);
a = a.next;
a.next = new ListNode(42);

module.exports = {
    ListNode,
    list1,
    list2
}