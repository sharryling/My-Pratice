/* 链表 */
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}
function LList() {
    this.head = new Node('head');     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    //     this.remove = remove;               //删除节点
    //   this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表 
}
function find(item) {
    var current = this.head
    while (current.element !== item) {
        current = current.next
    }
    return current
}
function insert(newElement, item) {
    var newNode = new Node(newElement)
    var curNode = this.find(item)
    newNode.next = curNode.next
    curNode.next = newNode
}
function display() {
    var list = []
    var curNode = this.head
    while (curNode !== null) {
        list.push(curNode.element)
        curNode = curNode.next
    }
    console.log(list);
}
var testNode = new LList()
testNode.insert('a1', 'head')
testNode.insert('a2', 'a1')
testNode.insert('a3', 'a2')
testNode.display()

function find(item) {
    var current = this.head
    while (current.element !== item) {
        current = current.next
    }
    return current
}

/* 双向链表 */
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    this.previous = null;     //上一个节点链接
}



function insert(newElement, item) {
    var newNode = new Node(newElement)
    var curNode = this.find(item)
    // new下一个和cur下一个相互指向
    newNode.next = curNode.next
    //curNode.next.previous = newNode
    //new和cur相互指向
    newNode.previous = curNode
    curNode.next = newNode
}





/* 字典 */
var list = []
list['key1'] = 'value1'
list['key2'] = 'value2'
console.log(list);
