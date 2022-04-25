
function ListNode(x) {
    this.val = x;
    this.next = null;
    const print = (node, list) => {
        list.push(node.val)
        if(!node.next) {
            list.push(node.val)
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
var a = list1.next;
a.next = new ListNode(31);
a = a.next;
a.next = new ListNode(45);

var list2 = new ListNode(13);
/* console.log(head); */
list2.next = new ListNode(14);
var a = list2.next;
a.next = new ListNode(24);
a = a.next;
a.next = new ListNode(42);
// console.log(list1, list2);


/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
 */

var mergeTwoLists = function (list1, list2) {
    let buf1 = list1;
    let buf2 = list2;
    let head = new ListNode(0);
    let cur = head;
    while (1) {
        if (buf1 && buf2) {
            const isOneSmaller = buf1.val < buf2.val
            cur.next = isOneSmaller ? buf1 : buf2
            isOneSmaller ? (buf1 = buf1.next) : (buf2 = buf2.next)
        } else if (!buf1 && !buf2) {
            break;
        } else {
            const isOneNull = !!buf1
            cur.next = isOneNull ? buf1 : buf2
            isOneNull ? (buf1 = buf1.next) : (buf2 = buf2.next)
        }
        if (cur) {
            cur = cur.next
        } else {
            break;
        }
    }
    head = head.next
    return head

};


function mainFunc(buf1, buf2, cur) {
    if (buf1 && buf2) {
        const isOneSmaller = buf1.val < buf2.val
        cur = isOneSmaller ? buf1 : buf2
        isOneSmaller ? (buf1 = buf1.next) : (buf2 = buf2.next)
    } else if (!buf1 && !buf2) {
        return
    } else {
        const isOneNull = !!buf1
        cur = isOneNull ? buf1 : buf2
        isOneNull ? (buf1 = buf1.next) : (buf2 = buf2.next)
    }
    console.log('cur', cur.val, cur.printf())
    if (cur) {
        return mainFunc(buf1, buf2, cur.next)
    } else {
        return
    }
}

var mergeTwoLists = function (list1, list2) {
    let head = new ListNode(0);
    let cur = head;
    mainFunc(list1, list2, cur.next)
    return head
};
console.log('mergeTwoLists', mergeTwoLists(list1, list2))