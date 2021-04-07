/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
     /**
      * 解题思路：
      *     反转两个节点：将n+1的next指向n
      *     反转多个节点：双指针遍历链表，重复上述操作
      * 
      * 解题步骤：
      *     双指针一前一后遍历链表
      *     反转双指针
      */
     
    //创建两个指针
    let p1 = head;
    let p2 = null;
    while(p1) {
        const temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
};