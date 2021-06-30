/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * 解题思路：用一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就有圈。
 */

 var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;

    while(p1 && p2 && p2.next) {
        p1 = p1.next; 
        p2 = p2.next.next;
        if(p1 === p2) {
            return  true;
        } 
    }
    return false;
};