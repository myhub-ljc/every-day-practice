/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    
    /**
     * 解题思路：
     *  无法直接获取被删除节点的上一个节点。
     *  因此将被删除节点转移到下一个节点。
     */

    //首先将被删节点的值改为其下一个节点的值
     node.val = node.next.val;
     
    //那么便可以删除被删节点的下一个节点(也就是将下一个节点的next指向其下下一个next) 
    node.next = node.next.next;
};