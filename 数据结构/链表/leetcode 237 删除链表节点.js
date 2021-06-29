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

    /**
     * 解题思路：
     *  无法直接获取被删除节点的上一个节点。
     *  因此将被删除节点转移到下一个节点。
     */

var deleteNode = function (node) {
    //将被删除节点的下一个节点的值赋值给被删除节点
    node.val = node.next.val;

    //将被删除节点的next指向它的下一个节点的下个节点 
    node.next = node.next.next;
};