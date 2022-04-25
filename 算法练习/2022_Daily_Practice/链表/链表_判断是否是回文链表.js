
// 我的
var isPalindrome = function(head) {
    if(!head || !head.next) {
        return true
    }
    const list = []
    while(head) {
        list.push(head.val)
        head = head.next
    }
    const len = list.length
    for(let i = 0; i<Math.floor(len/2); i++) {
        if(list[i] !== list[len - i - 1]) {
            return false
        }
    }
    return true
};




/**
 * 作者：smooth-b
链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/by-smooth-b-sjmy/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

最简单的两次遍历解决
第一次遍历记录链表中所有结点值，记录成一个字符串即可
然后通过字符串翻转后是否等于原字符串即可

 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true;
    let s = '', p = head;
    while(p) {
        s += p.val;
        p = p.next;
    }
    if(s.split('').reverse().join('') === s) return true;
    else return false;
};

