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

/**
 * 解题思路：
 * 因为输入的链表是有序的, 所以重复元素一定是相邻的。因此我们只需要遍历链表，如果发现当前元素和下个元素值相同, 就相当于删除下个元素值。
 */
 var deleteDuplicates = function(head) {
    let p = head;
    while(p && p.next) {
        if(p.val === p.next.val)  {
            p.next = p.next.next;
        } else {
            p = p.next;   
        }
    }
    return head;
};