/**
 * https://leetcode-cn.com/problems/linked-list-cycle/solution/shi-chuan-yi-jiu-de-javsscripttian-xiu-j-u8kv/
 */

//  列举几个从天而降的掌法：

//  JSON.stringify(head) 秒杀法😃
//  除非不报错，报错就是有环！！
 
 
 var hasCycle = function (head) {
     try {
         JSON.stringify(head)
     } catch{
         return true
     }
     return false
 };
//  标记法
//  给遍历过的节点打记号，如果遍历过程中遇到有记号的说明已环🤓
 
 const hasCycle = function(head) {
   while (head) {
     if (head.tag) {
       return true;
     }
     head.tag = true;
     head = head.next;
   }
   return false;
 };